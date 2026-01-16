# Endpoints sugeridos (MVP)

- GET /settings ou GET /brand  
  Conteudo institucional: nome, slogan, cores/tema, textos do hero, highlights, stats.
- GET /gallery  
  Lista de imagens para WorkGallery (id, src, alt, ordem).
- GET /services  
  Catalogo de servicos (id, nome, descricao, duracao, preco, categoria).
- GET /professionals  
  Equipe (id, nome, bio, foto, especialidades, disponibilidade resumida).
- GET /availability  
  Slots disponiveis (parametros: profissional, servico, data).
- POST /bookings  
  Criar agendamento (cliente, servico, profissional, data/hora, observacoes).
- GET /bookings/:id  
  Status/confirmacao do agendamento.
- POST /customers ou POST /leads  
  Captura basica de contato (nome, telefone, e-mail).
- GET /faq ou GET /policies  
  Regras de cancelamento, no-show, horarios, etc.

# Mapa de uso por tela

- GET /settings ou GET /brand -> app/page.tsx (hero, stats, highlights); app/layout.tsx (metadata).
- GET /gallery -> app/agendar/page.tsx (props do components/WorkGallery.tsx).
- GET /services -> app/servicos/page.tsx.
- GET /professionals -> app/profissionais/page.tsx e app/agendar/page.tsx (detalhe do profissional).
- GET /availability -> app/agendar/page.tsx (horarios no components/ScheduleDrawer.tsx).
- POST /bookings -> components/ScheduleDrawer.tsx (acao "Confirmar agendamento"), chamado em app/agendar/page.tsx.
- GET /bookings/:id -> tela de confirmacao (a criar).
- POST /customers ou POST /leads -> formulario de contato/lead (a criar).
- GET /faq ou GET /policies -> secao/pagina informativa (a criar).

# Paginas -> endpoints

- app/page.tsx -> GET /settings ou GET /brand.
- app/servicos/page.tsx -> GET /services.
- app/profissionais/page.tsx -> GET /professionals.
- app/agendar/page.tsx -> GET /professionals (detalhe), GET /gallery, GET /availability, POST /bookings.
- app/layout.tsx -> GET /settings ou GET /brand (metadata).
- (nova) app/agendamento/confirmacao/page.tsx -> GET /bookings/:id.
