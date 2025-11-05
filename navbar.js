class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host{display:block;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.1);position:sticky;top:0;z-index:50}
                .nav{max-width:1200px;margin:0 auto;padding:0 1rem}
                .flex{display:flex;justify-content:space-between;align-items:center;height:4rem}
                .logo{font-size:1.75rem;font-weight:700;color:#2563eb;text-decoration:none}
                .links{display:none;gap:2rem}
                .links a{color:#374151;font-weight:500;text-decoration:none;transition:color .3s}
                .links a:hover{color:#2563eb}
                .actions{display:none;gap:1rem;align-items:center}
                .btn{background:#2563eb;color:#fff;padding:.5rem 1rem;border-radius:.5rem;font-weight:500;text-decoration:none;transition:background .3s}
                .btn:hover{background:#1d4ed8}
                .mobile{display:block;background:none;border:none;cursor:pointer}
                .menu{display:none;flex-direction:column;background:#fff;border-top:1px solid #e5e7eb;padding:1rem 0;margin-top:1rem}
                .menu a{padding:.75rem 0;color:#374151;text-decoration:none;font-weight:500}
                .menu a:hover{color:#2563eb}
                @media(min-width:768px){
                    .links,.actions{display:flex}
                    .mobile,.menu{display:none}
                }
            </style>
            <nav class="nav">
                <div class="flex">
                    <a href="index.html" class="logo">WorkCoq</a>
                    <div class="links">
                        <a href="vagas.html">Vagas</a>
                        <a href="candidato.html">Candidatos</a>
                        <a href="empresa.html">Empresas</a>
                        <a href="index.html#como-funciona">Como Funciona</a>
                    </div>
                    <div class="actions">
                        <a href="login.html">Entrar</a>
                        <a href="empresa.html" class="btn">Para Empresas</a>
                    </div>
                    <button class="mobile" id="toggle"><i data-feather="menu" class="w-6 h-6"></i></button>
                </div>
                <div class="menu" id="menu">
                    <a href="vagas.html">Vagas</a>
                    <a href="candidato.html">Candidatos</a>
                    <a href="empresa.html">Empresas</a>
                    <a href="index.html#como-funciona">Como Funciona</a>
                    <a href="login.html">Entrar</a>
                    <a href="empresa.html" class="btn inline-block text-center mt-2">Para Empresas</a>
                </div>
            </nav>
        `;

        const toggle = this.shadowRoot.getElementById('toggle');
        const menu = this.shadowRoot.getElementById('menu');
        toggle.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        });

        setTimeout(() => feather.replace(), 0);
    }
}
customElements.define('custom-navbar', CustomNavbar);