# Endpoints sugeridos (MVP)

- GET /settings ou GET /brand  
  Conteudo institucional: nome, slogan, cores/tema, textos do hero, highlights, stats.
  Response exemplo:
  ```json
  {
    "name": "Barbergenda",
    "slogan": "Barbearia de bairro com acabamento premium",
    "theme": {
      "primary": "#111111",
      "accent": "#F97316",
      "background": "#FFF7ED"
    },
    "hero": {
      "title": "Seu corte impecavel em minutos",
      "subtitle": "Agende com profissionais especializados."
    },
    "highlights": [
      { "label": "Clientes", "value": "12k+" },
      { "label": "Avaliacoes", "value": "4.9" }
    ],
    "stats": [
      { "label": "Anos no bairro", "value": "9" },
      { "label": "Barbeiros", "value": "6" }
    ]
  }
  ```

- GET /gallery  
  Lista de imagens para WorkGallery (id, src, alt, ordem).
  Response exemplo:
  ```json
  [
    { "id": "barba-1", "src": "/servicos/barba.png", "alt": "Barba", "order": 1 }
  ]
  ```

- GET /services  
  Catalogo de servicos (id, nome, descricao, duracao, preco, categoria).
  Response exemplo:
  ```json
  [
    {
      "id": "srv-001",
      "name": "Corte + Barba Premium",
      "description": "Corte classico, degradê e barba alinhada.",
      "durationMinutes": 60,
      "priceCents": 12000,
      "category": "Premium"
    }
  ]
  ```

- GET /professionals  
  Equipe (id, nome, bio, foto, especialidades, rating resumido).
  Response exemplo:
  ```json
  [
    {
      "id": "pro-001",
      "name": "Nate Black",
      "bio": "Fade, barba de precisao e finalizacao classica.",
      "photo": "/professionals/male_professional_1.png",
      "specialties": ["Fade", "Barba", "Classico"],
      "rating": { "score": 4.9, "count": 320 }
    }
  ]
  ```

- GET /availability  
  Slots disponiveis (query: professionalId, serviceId, date).
  Query exemplo:
  ```
  /availability?professionalId=pro-001&serviceId=srv-001&date=2025-04-16
  ```
  Response exemplo:
  ```json
  {
    "date": "2025-04-16",
    "professionalId": "pro-001",
    "serviceId": "srv-001",
    "timezone": "America/Sao_Paulo",
    "slots": [
      { "start": "10:00", "end": "11:00", "available": true },
      { "start": "11:00", "end": "12:00", "available": false }
    ]
  }
  ```

- POST /customers  
  Captura basica de cliente (celular como chave primaria).
  Request exemplo:
  ```json
  {
    "phone": "+5511999999999",
    "name": "Rafael Costa",
    "email": "rafael@email.com"
  }
  ```
  Response exemplo:
  ```json
  {
    "id": "cus-2049",
    "phone": "+5511999999999",
    "name": "Rafael Costa",
    "email": "rafael@email.com",
    "createdAt": "2025-04-14T12:30:00Z"
  }
  ```

- POST /customers/lookup  
  Verifica se cliente existe por celular (na tela de cadastro).
  Request exemplo:
  ```json
  { "phone": "+5511999999999" }
  ```
  Response exemplo:
  ```json
  {
    "exists": true,
    "customer": { "id": "cus-2049", "name": "Rafael Costa" }
  }
  ```

- POST /bookings  
  Criar agendamento (cliente, servico, profissional, data/hora, observacoes).
  Request exemplo:
  ```json
  {
    "customerId": "cus-2049",
    "serviceId": "srv-001",
    "professionalId": "pro-001",
    "date": "2025-04-16",
    "time": "12:00",
    "notes": "Prefiro navalha tradicional."
  }
  ```
  Response exemplo:
  ```json
  {
    "id": "agd-2049",
    "status": "confirmed",
    "summary": {
      "service": "Corte + Barba Premium",
      "professional": "Nate Black",
      "date": "2025-04-16",
      "time": "12:00",
      "durationMinutes": 60,
      "priceCents": 12000
    }
  }
  ```

- GET /bookings/:id  
  Status/confirmacao do agendamento.
  Response exemplo:
  ```json
  {
    "id": "agd-2049",
    "status": "confirmed",
    "customer": {
      "id": "cus-2049",
      "name": "Rafael Costa",
      "phone": "+5511999999999"
    },
    "service": {
      "id": "srv-001",
      "name": "Corte + Barba Premium"
    },
    "professional": {
      "id": "pro-001",
      "name": "Nate Black"
    },
    "date": "2025-04-16",
    "time": "12:00",
    "durationMinutes": 60,
    "priceCents": 12000,
    "location": "Rua Bela Vista, 182 - Centro",
    "payment": "Cartao na unidade",
    "createdAt": "2025-04-14T12:30:00Z"
  }
  ```

- POST /bookings/:id/feedback  
  Feedback de experiencia de agendamento (0 a 5 estrelas).
  Request exemplo:
  ```json
  { "rating": 4 }
  ```
  Response exemplo:
  ```json
  { "id": "agd-2049", "rating": 4 }
  ```

- GET /faq ou GET /policies  
  Regras de cancelamento, no-show, horarios, etc.
  Response exemplo:
  ```json
  {
    "items": [
      {
        "title": "Cancelamento",
        "content": "Cancelar ate 2h antes sem custo."
      }
    ]
  }
  ```

# Mapa de uso por tela

- GET /settings ou GET /brand -> app/page.tsx (hero, stats, highlights); app/layout.tsx (metadata).
- GET /gallery -> app/agendar/page.tsx (props do components/WorkGallery.tsx).
- GET /services -> app/servicos/page.tsx.
- GET /professionals -> app/profissionais/page.tsx e app/agendar/page.tsx (detalhe do profissional).
- GET /availability -> app/agendar/page.tsx (horarios no components/ScheduleDrawer.tsx).
- POST /customers/lookup -> app/agendamento/cadastro/page.tsx (checar se existe).
- POST /customers -> app/agendamento/cadastro/page.tsx (criar cliente com celular).
- POST /bookings -> components/ScheduleDrawer.tsx (acao "Confirmar agendamento"), chamado em app/agendar/page.tsx.
- GET /bookings/:id -> app/agendamento/confirmacao/page.tsx.
- POST /bookings/:id/feedback -> app/agendamento/confirmacao/page.tsx (estrelas 0-5).
- GET /faq ou GET /policies -> secao/pagina informativa (a criar).

# Paginas -> endpoints

- app/page.tsx -> GET /settings ou GET /brand.
- app/servicos/page.tsx -> GET /services.
- app/profissionais/page.tsx -> GET /professionals.
- app/agendar/page.tsx -> GET /professionals (detalhe), GET /gallery, GET /availability, POST /bookings.
- app/layout.tsx -> GET /settings ou GET /brand (metadata).
- app/agendamento/cadastro/page.tsx -> POST /customers/lookup, POST /customers.
- (nova) app/agendamento/confirmacao/page.tsx -> GET /bookings/:id.
