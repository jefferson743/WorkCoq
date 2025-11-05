class CustomJobCard extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Vaga sem título';
        const company = this.getAttribute('company') || 'Empresa';
        const location = this.getAttribute('location') || 'Coqueiral, MG';
        const salary = this.getAttribute('salary') || 'A combinar';
        const type = (this.getAttribute('type') || 'CLT').toUpperCase();

        const colors = {
            CLT: 'bg-blue-100 text-blue-700',
            PJ: 'bg-green-100 text-green-700',
            FREELANCER: 'bg-red-100 text-red-700',
            ESTAGIO: 'bg-purple-100 text-purple-700'
        };

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .card{transition:all .3s}
                .card:hover{transform:translateY(-4px);box-shadow:0 10px 25px -5px rgba(0,0,0,.1)}
                .whatsapp-btn{background:#25d366;color:white;padding:0.5rem 1rem;border-radius:0.5rem;font-size:0.875rem;display:flex;align-items:center;gap:0.5rem;transition:all .3s}
                .whatsapp-btn:hover{background:#128c7e}
            </style>
            <div class="card bg-white p-6 rounded-xl shadow-sm cursor-pointer h-full flex flex-col">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="font-semibold text-lg text-gray-800">${title}</h3>
                        <p class="text-gray-600">${company}</p>
                    </div>
                    <div class="w-12 h-12 bg-gray-200 border-2 border-dashed rounded-lg"></div>
                </div>
                <div class="flex items-center text-sm text-gray-500 mb-2"><i data-feather="map-pin" class="w-4 h-4 mr-1"></i><span>${location}</span></div>
                <div class="flex items-center text-sm text-gray-500 mb-4"><i data-feather="dollar-sign" class="w-4 h-4 mr-1"></i><span>${salary}</span></div>
                <div class="mt-auto flex justify-between items-center gap-2">
                    <span class="px-3 py-1 rounded-full text-xs font-medium ${colors[type] || colors.CLT}">${type}</span>
                    <div class="flex gap-2">
                        <a href="vaga-detalhes.html" class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                            Ver detalhes <i data-feather="chevron-right" class="w-4 h-4 ml-1"></i>
                        </a>
                        <a href="https://wa.me/5535999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20vaga%20de%20*${encodeURIComponent(title)}*%20na%20*${encodeURIComponent(company)}*" 
                           target="_blank" class="whatsapp-btn">
                            <i data-feather="message-circle" class="w-4 h-4"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        `;

        setTimeout(() => feather.replace(), 0);
    }
}
customElements.define('custom-job-card', CustomJobCard);