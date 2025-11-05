class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .footer{background:#1f2937;color:#d1d5db;padding:3rem 0 2rem;margin-top:4rem}
                .container{max-width:1200px;margin:0 auto;padding:0 1rem}
                .grid{display:grid;grid-template-columns:1fr;gap:2rem;margin-bottom:2rem}
                .title{color:#fff;font-weight:600;margin-bottom:1rem;font-size:1.1rem}
                .link a{display:flex;align-items:center;color:#9ca3af;text-decoration:none;margin-bottom:.5rem;transition:all .3s}
                .link a:hover{color:#3b82f6;transform:translateX(4px)}
                .social{display:flex;gap:1rem;margin-top:1rem}
                .social a{color:#9ca3af;transition:all .3s}
                .social a:hover{color:#fff;transform:translateY(-3px)}
                .copy{text-align:center;padding-top:2rem;border-top:1px solid #374151;color:#6b7280;font-size:.875rem}
                @media(min-width:768px){.grid{grid-template-columns:repeat(4,1fr)}}
            </style>
            <footer class="footer">
                <div class="container">
                    <div class="grid">
                        <div><h3 class="title">WorkCoq</h3><p>Conectando talentos e oportunidades na região de Coqueiral.</p></div>
                        <div><h4 class="title">Para Candidatos</h4>
                            <div class="link">
                                <a href="vagas.html"><i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>Buscar Vagas</a>
                                <a href="candidato.html"><i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>Cadastrar Currículo</a>
                                <a href="#"><i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>Dicas Profissionais</a>
                            </div>
                        </div>
                        <div><h4 class="title">Para Empresas</h4>
                            <div class="link">
                                <a href="empresa.html"><i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>Anunciar Vagas</a>
                                <a href="#"><i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>Buscar Candidatos</a>
                                <a href="#"><i data-feather="chevron-right" class="w-4 h-4 mr-2"></i>Recursos para RH</a>
                            </div>
                        </div>
                        <div><h4 class="title">Contato</h4>
                            <p><i data-feather="mail" class="w-4 h-4 mr-2 inline"></i>contato@workcoq.com.br</p>
                            <p><i data-feather="phone" class="w-4 h-4 mr-2 inline"></i>(35) 99999-9999</p>
                            <p><i data-feather="map-pin" class="w-4 h-4 mr-2 inline"></i>Coqueiral, MG</p>
                            <div class="social">
                                <a href="#"><i data-feather="facebook" class="w-5 h-5"></i></a>
                                <a href="#"><i data-feather="instagram" class="w-5 h-5"></i></a>
                                <a href="#"><i data-feather="linkedin" class="w-5 h-5"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="copy"><p>© 2025 WorkCoq. Todos os direitos reservados.</p></div>
                </div>
            </footer>
        `;

        setTimeout(() => feather.replace(), 0);
    }
}
customElements.define('custom-footer', CustomFooter);