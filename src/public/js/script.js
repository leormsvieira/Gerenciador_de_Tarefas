// Funções utilitárias para o frontend

// Função para formatar datas
function formatDate(dateString) {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('pt-BR');
}

// Função para formatar data e hora
function formatDateTime(dateString) {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleString('pt-BR');
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
  // Criar elemento de notificação
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    max-width: 300px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;

  // Definir cor baseada no tipo
  switch(type) {
    case 'success':
      notification.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
      break;
    case 'error':
      notification.style.background = 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)';
      break;
    case 'warning':
      notification.style.background = 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)';
      notification.style.color = '#333';
      break;
    default:
      notification.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }

  notification.textContent = message;
  document.body.appendChild(notification);

  // Animar entrada
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  // Remover após 5 segundos
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Função para confirmar ações
function confirmAction(message, callback) {
  if (confirm(message)) {
    callback();
  }
}

// Função para validar email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função para limpar formulário
function clearForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.reset();
  }
}

// Função para destacar navegação ativa
function highlightActiveNavigation() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
      link.style.backgroundColor = 'rgba(255,255,255,0.3)';
    }
  });
}

// Função para loading state
function setLoadingState(elementId, isLoading, loadingText = 'Carregando...') {
  const element = document.getElementById(elementId);
  if (!element) return;

  if (isLoading) {
    element.disabled = true;
    element.dataset.originalText = element.textContent;
    element.textContent = loadingText;
  } else {
    element.disabled = false;
    element.textContent = element.dataset.originalText || element.textContent;
  }
}

// Função para fazer requisições HTTP com tratamento de erro
async function makeRequest(url, options = {}) {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Erro HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro na requisição:', error);
    showNotification(error.message || 'Erro na comunicação com o servidor', 'error');
    throw error;
  }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  highlightActiveNavigation();
  
  // Adicionar listener para links de navegação
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remover destaque de todos os links
      navLinks.forEach(l => {
        l.style.backgroundColor = '';
      });
      // Destacar link clicado
      this.style.backgroundColor = 'rgba(255,255,255,0.3)';
    });
  });
});

// Exportar funções para uso global
window.TaskManager = {
  formatDate,
  formatDateTime,
  showNotification,
  confirmAction,
  isValidEmail,
  clearForm,
  setLoadingState,
  makeRequest
};
