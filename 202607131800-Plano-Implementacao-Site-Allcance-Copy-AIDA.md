# 202607131800 — Plano de Implementação: Novo Copy e Estrutura do Site allcance.co

> **Documento de execução para Claude Code (superpowers).**
> Implementar por fases, na ordem. Cada fase tem escopo fechado, copy final validada e critérios de aceite.
> Não improvisar copy. Todo texto publicável está neste documento e foi validado por Weber Jatahy (CEO, Allcance).

---

## 0. CONTEXTO E GUARDRAILS (ler antes de qualquer fase)

### 0.1. O que é este projeto

Reposicionamento do site institucional **allcance.co** (SPA em JavaScript, página única) para consolidar a Allcance como **consultoria em saúde mental corporativa**, com o **ecossistema Allcare** como sustentação da entrega, e soluções de **PGR psicossocial (NR-1)** e **DHO**. Modelo de copy: **AIDA** (Atenção, Interesse, Desejo, Ação).

### 0.2. Guardrails inegociáveis (aplicar em TODO texto, meta tag, alt e microcopy)

1. **Allcare nunca é software, SaaS, plataforma vendável ou produto autônomo.** Redação obrigatória: Allcare é o **ecossistema proprietário para monitorar a saúde mental corporativa**, que sustenta a entrega da consultoria. Termos proibidos: "nossa plataforma", "assine", "software", "app", "contrate o Allcare", "acesso ao sistema". Termos permitidos: "ecossistema", "metodologia proprietária", "ferramenta de suporte técnico à consultoria", "dashboard auditável (entregue como parte da consultoria)".
2. **Zero gatilho de medo regulatório.** Proibido citar: prazo de 26/05/2026, valores de multa (NR-28), "a fiscalização não vai esperar", ameaça de autuação. Motivo: decisão do STF (ADPF 1316, Min. André Mendonça, 25/06/2026) suspendeu por 90 dias as sanções sobre dispositivos psicossociais da NR-1; referendo do plenário entre 07 e 18/08/2026. A obrigação de gestão continua, a penalidade está suspensa. Enquadramento obrigatório: **NR-1 como ativo e consequência do trabalho bem feito; urgência é econômica e de talento, não punitiva.**
3. **Sem preço público.** Nenhum valor, tabela ou card de pricing no site. A trilha de engajamento substitui os cards de contratação.
4. **Dados sempre com atribuição visível** (fonte junto ao número). Usar somente os dados da seção 0.4.
5. **Tipografia do texto: nunca usar travessões.** Usar vírgulas, dois-pontos ou reformular. Nunca usar emojis.
6. **Idioma: português brasileiro com acentuação correta em todo o conteúdo.**
7. **Nome do protocolo:** usar "Consultoria em Gestão de Riscos Psicossociais" como nome público. NÃO fixar o nome "PSI-NR1" em novos componentes (rebranding pendente). Se o código atual referenciar PSI-NR1, manter apenas em identificadores internos, nunca em texto visível.
8. **Rodapé:** manter "Allcance · by Instituto Autogenesis" como está hoje. Não expandir nem explicar (pendência jurídica em resolução).

### 0.3. Identidade visual (referência)

- Fonte institucional: Arial (ou stack equivalente sans-serif já usada no site).
- Cores: primária #1F4E79 (navy), secundária #2E75B6 (azul), acento #D6E4F0 (azul claro). O site atual usa fundo escuro com acento laranja; **manter a estética atual do site** nesta rodada (não é um redesign visual, é reestruturação de conteúdo e seções). Registrar em comentário no código onde houver conflito de paleta para decisão futura.

### 0.4. Banco de dados aprovado para uso no copy (com fonte)

| Dado | Redação aprovada | Fonte visível |
|---|---|---|
| Afastamentos 2025 | "Em 2025, a Previdência Social concedeu 546.254 benefícios por incapacidade temporária por transtornos mentais e comportamentais, recorde da série e quinto ano consecutivo de alta (15,66% sobre 2024)." | Ministério da Previdência Social |
| Ranking de causas | "Ansiedade e depressão já respondem pela segunda maior causa de afastamento do país: 166.489 e 126.608 licenças em 2025, respectivamente." | Ministério da Previdência Social |
| ROI OMS | "Cada US$1 investido em tratamento de depressão e ansiedade retorna US$4 em saúde e capacidade de trabalho." | OMS, The Lancet Psychiatry, 2016 |
| Custo de turnover | "Repor um talento custa de 50% a 200% do salário anual, dependendo do cargo." | Robert Half / SHRM |
| Certificação federal | "Certificado Empresa Promotora da Saúde Mental, Lei 14.831/2024." | Planalto |

Estimativa de R$3,5 bilhões ao INSS (Data Cajuína): **NÃO usar** nesta versão.

URLs de referência (para eventual link "fonte"):
- https://www.gov.br/previdencia/pt-br/noticias/2026/janeiro/previdencia-social-concede-546-254-beneficios-por-incapacidade-temporaria-por-transtornos-mentais
- https://agenciabrasil.ebc.com.br/internacional/noticia/2016-04/oms-investir-em-tratamento-para-depressao-gera-retorno-quatro-vezes
- https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14831.htm
- https://economiasp.com/2026/03/16/turnover-pode-custar-ate-200-do-salario-anual/

### 0.5. Arquitetura final da página (ordem das seções)

1. Hero (carrossel de H1 + subheadline fixa + CTA fixo + barra de confiança)
2. Bloco "Transforme..." (headline rotativa segmentada por decisor)
3. Interesse: o problema em números
4. Desejo A: a solução como sistema
5. Desejo B: ecossistema Allcare
6. Desejo C: NR-1 como ativo
7. Desejo D: diferenciais (4 blocos)
8. Desejo E: blocos segmentados por decisor (abas: Sou RH / Sou do financeiro / Sou sócio)
9. Serviços reestruturados (núcleo + complementares)
10. Como começamos (trilha de engajamento, substitui cards de preço)
11. Equipe (mantida, com credenciais reforçadas)
12. Prova (números reformulados + credenciais)
13. Ação: fechamento + CTA final
14. Contato (formulário atual, microcopy melhorada)
15. Rodapé (inalterado)

Seções REMOVIDAS: Blog/Artigos (inteira), cards de preço NR1/DHO/PDI, itens "Recrutamento & Seleção" e bloco de IA da vitrine de serviços.

---

## FASE 1 — Remoção do Blog e higiene de rotas

**Escopo:**
1. Remover a seção "Artigos"/Blog da home (componente, rota, itens de menu e âncoras).
2. Remover qualquer link interno para o blog (menu, rodapé, cards).
3. Se existirem rotas/URLs de artigos individuais: implementar **redirect 301** de cada URL de artigo para a home (`/`). Se a hospedagem for estática sem servidor, usar redirects da plataforma (Netlify `_redirects`, Vercel `vercel.json`, ou meta refresh como último recurso, registrando a limitação).
4. Buscar no bundle/código por strings mortas do blog e limpar.

**Critérios de aceite:**
- Nenhuma menção visual a blog/artigos em nenhuma viewport.
- URLs antigas de artigos não retornam 404 (retornam 301 ou equivalente).
- Build sem referências quebradas.

---

## FASE 2 — Hero: carrossel de H1 + subheadline e CTA fixos

**Comportamento:**
- Rotacionar SOMENTE o H1 (fade ou typewriter), intervalo de 7 segundos por frase, pausa no hover, loop infinito. Subheadline, CTA e microcopy permanecem fixos.
- Acessibilidade: `aria-live="polite"` no contêiner do H1; garantir que leitores de tela não fiquem presos no loop; respeitar `prefers-reduced-motion` (se ativo, exibir apenas a frase 1 estática).
- Trocar a imagem do microfone por imagem de contexto corporativo (reunião de diretoria, ambiente de escritório, tom escuro compatível com a estética atual). Se não houver asset disponível, manter a imagem atual e registrar TODO no código. O microfone poderá ser reutilizado futuramente na seção de palestras.

**H1 rotativo (3 frases, nesta ordem):**
1. "Saúde mental que vira retorno auditável, não passivo."
2. "Transforme o cuidado com o seu time em resultado mensurável. A NR-1 em dia vem como consequência."
3. "Menos afastamento, mais produtividade, documentação que resiste a auditoria."

**Subheadline fixa:**
"A Allcance é a consultoria que estrutura a saúde mental da sua empresa de ponta a ponta: diagnóstico de riscos psicossociais, plano de ação, acompanhamento clínico conduzido por psicólogos e documentação auditável, tudo sustentado pelo ecossistema Allcare."

**CTA fixo (botão primário):** "Quero diagnosticar minha empresa"
**Microcopy sob o botão:** "Conversa inicial sem compromisso. Resposta em até 1 dia útil."
**Ação do CTA:** scroll suave até a seção Contato (âncora), ou abrir WhatsApp +55 71 99290-5843 com mensagem pré-preenchida "Quero diagnosticar minha empresa" (implementar as duas opções e deixar a de WhatsApp ativa por padrão).

**Barra de confiança (faixa fina abaixo do hero):**
"Consultoria em saúde mental corporativa. Diagnóstico, plano de ação, acompanhamento clínico e documentação auditável, num só fluxo."

**Critérios de aceite:**
- Rotação suave sem layout shift (reservar altura mínima do H1 para a maior frase).
- CTA visível sem scroll em desktop e mobile.
- `prefers-reduced-motion` respeitado.

---

## FASE 3 — Bloco "Transforme..." com headline rotativa por decisor

**Comportamento:** mesma mecânica de rotação da Fase 2 (7s, fade, pausa no hover, reduced-motion), aplicada à headline do bloco de transição pós-hero. Corpo do bloco fixo.

**Headlines rotativas (3 frases, nesta ordem):**
1. "Transforme clima pesado e afastamento em indicadores que você apresenta com orgulho à diretoria." *(RH/DHO)*
2. "Transforme obrigação regulatória em documentação que sustenta a empresa em qualquer auditoria." *(Jurídico/Compliance)*
3. "Transforme custo invisível de adoecimento em investimento com retorno de até 4 para 1." *(Financeiro/Dono)*

**Critérios de aceite:** idênticos aos da Fase 2 (sem layout shift, acessível).

---

## FASE 4 — Seção Interesse: o problema em números

**Bloco de abertura (parágrafo):**
"O adoecimento mental deixou de ser assunto exclusivo do RH e virou uma linha no balanço. Ansiedade, depressão e burnout já estão entre as maiores causas de afastamento do trabalho no Brasil. Enquanto isso, quem fica absorve a sobrecarga, a entrega cai e os melhores talentos vão embora."

**Cards de dados (3 cards, cada um com número em destaque, texto de apoio e fonte em corpo menor):**

| Número em destaque | Texto de apoio | Fonte (visível no card) |
|---|---|---|
| 546.254 | "benefícios por incapacidade temporária por transtornos mentais concedidos em 2025, recorde da série e quinto ano consecutivo de alta (15,66% sobre 2024)" | Ministério da Previdência Social |
| 4 para 1 | "é o retorno de cada US$1 investido em tratamento de depressão e ansiedade, em saúde e capacidade de trabalho" | OMS, The Lancet Psychiatry, 2016 |
| até 200% | "do salário anual é o que pode custar a reposição de um talento que pediu para sair" | Robert Half / SHRM |

**Frase de transição (fechamento da seção):**
"A boa notícia: dá para virar esse jogo. E quem estrutura o cuidado primeiro colhe primeiro, no clima, no caixa e na segurança documental."

**Critérios de aceite:**
- Fonte visível em cada card (não apenas em tooltip).
- Nenhuma menção a multa, prazo ou fiscalização.

---

## FASE 5 — Seções Desejo (A a E)

### 5A. A solução como sistema

Título: "Saúde mental como sistema, não como evento"

Corpo: "A Allcance estrutura a saúde mental da sua empresa como um sistema, não como um evento pontual. Começa com o diagnóstico dos riscos psicossociais, avança para um plano de ação sob medida e se sustenta no acompanhamento clínico contínuo conduzido por psicólogos, com tudo documentado de forma auditável no ecossistema Allcare."

### 5B. Ecossistema Allcare

Título: "Ecossistema Allcare"
Subtítulo: "Cuidado que acontece e que fica registrado"

Corpo: "O Allcare é o ecossistema proprietário que a Allcance usa para monitorar a saúde mental corporativa e sustentar a entrega da consultoria: protocolo clínico de acolhimento em 4 sessões conduzido por psicólogos, questionários de monitoramento contínuo e um dashboard que dá ao RH visão dos indicadores e gera a documentação que comprova a gestão de riscos."

**Atenção (guardrail 0.2.1):** não adicionar botão de "conhecer a plataforma", "criar conta" ou similar. CTA permitido nesta seção: "Quero diagnosticar minha empresa" (mesmo destino do hero).

### 5C. NR-1 como ativo

Título: "NR-1: de passivo a ativo"

Corpo: "Conformidade com a NR-1 não é o que vendemos. É o que sobra quando o trabalho é bem feito. Ao cuidar de verdade da saúde mental do time, sua empresa mapeia riscos, documenta ações e mantém o PGR em dia, independentemente do vaivém regulatório. A NR-1 deixa de ser passivo e vira ativo: prova de que a sua empresa é um bom lugar para trabalhar e um risco menor para clientes, investidores e auditores. Existe inclusive reconhecimento federal para isso: o Certificado Empresa Promotora da Saúde Mental (Lei 14.831/2024), que sua marca empregadora pode ostentar."

### 5D. Diferenciais (4 blocos curtos, ícone + título + frase)

1. **Liderança clínica de verdade.** "Consultoria de ponta a ponta liderada por psicólogo com CRP, não por um algoritmo."
2. **Metodologia proprietária.** "Diagnóstico de riscos psicossociais e protocolo de acolhimento estruturado, replicável e auditável."
3. **Tudo num só fluxo.** "Clínica, comportamento e compliance documental integrados no ecossistema Allcare."
4. **Assinatura técnica.** "Todos os documentos entregues com assinatura de psicólogo (CRP) e técnica de segurança do trabalho (CRT)."

### 5E. Blocos segmentados por decisor (abas ou âncoras)

Componente de abas: "Sou RH" / "Sou do financeiro" / "Sou sócio". Em mobile, acordeão.

**Aba 1, Sou RH (RH e DHO):**
"Você sente na pele: afastamentos por CID-F, sobrecarga de quem fica, clima pesado e turnover que não para. A Allcance te dá diagnóstico, plano de ação e um acompanhamento que o time realmente adere, mais os indicadores que você precisa para mostrar resultado à diretoria. E a NR-1 fica documentada sem virar mais um abacaxi no seu colo."

**Aba 2, Sou do financeiro (CFO, controller):**
"Adoecimento mental é custo invisível: afastamento, presenteísmo, sinistralidade do plano de saúde e reposição de talento, que pode custar de 50% a 200% do salário anual de cada saída, segundo a Robert Half (a SHRM situa cargos técnicos e gerenciais entre 100% e 150%). Do outro lado, a OMS mostrou em estudo publicado no The Lancet Psychiatry que cada US$1 investido em tratamento contra depressão e ansiedade retorna US$4 em saúde e capacidade de trabalho. A Allcance transforma esse gasto difuso em investimento com retorno mensurável, e você leva números para a reunião de diretoria."

**Aba 3, Sou sócio (donos e sócios):**
"Riscos psicossociais mal geridos viram ações trabalhistas, sinistralidade no plano de saúde e dano de reputação, com ou sem fiscalização ativa. A Allcance protege o negócio na origem: cuida do time, blinda a empresa com documentação assinada por profissionais habilitados e transforma o cuidado em vantagem competitiva. Menos risco, mais valor de marca empregadora. Decisão de dono."

**Critérios de aceite da Fase 5:**
- Nenhum termo proibido do guardrail 0.2.1 e 0.2.2 em nenhum texto.
- Abas acessíveis por teclado (roles ARIA de tablist/tab/tabpanel).

---

## FASE 6 — Serviços reestruturados (dois níveis)

Substituir a grade atual de 9 itens por arquitetura em dois níveis. Remover da vitrine: "Recrutamento & Seleção" e o bloco de IA (remover componentes, manter código comentado apenas se a remoção limpa for arriscada).

### Nível 1, O núcleo (cards grandes, destaque visual)

**Card 1 — Consultoria em Gestão de Riscos Psicossociais**
"Diagnóstico FRPRT, inventário de riscos, PGR Psicossocial, plano de ação, políticas, treinamentos e relatórios de monitoramento. Documentação com assinatura técnica de psicólogo e técnica de segurança. A conformidade vem como consequência."

**Card 2 — Ecossistema Allcare**
"O ecossistema proprietário que monitora a saúde mental corporativa e sustenta nossa consultoria: protocolo clínico de acolhimento em 4 sessões, monitoramento contínuo e dashboard auditável para o RH."

### Nível 2, Soluções complementares (cards menores)

| Card | Copy |
|---|---|
| AllDisc | "Mapeamento comportamental DISC com devolutiva individual por analista, integrado ao desenvolvimento de pessoas." |
| Implementação de DHO | "Estruturação do setor de Desenvolvimento Humano e Organizacional, com psicólogos, ações integrativas e assessoria ao RH." |
| PDI | "Planos de desenvolvimento individuais de 6 meses, integrados ao AllDisc." |
| Palestras e Treinamentos | "Conteúdos sob demanda em saúde mental, liderança e cultura, presenciais ou online." |
| Pesquisas de Cultura e Clima | "Diagnósticos organizacionais que alimentam o plano de ação e o PGR." |

**Critérios de aceite:**
- Hierarquia visual clara entre núcleo e complementares.
- Nenhum card com preço ou botão "CONTRATE".

---

## FASE 7 — "Como começamos" (trilha de engajamento, substitui os cards de preço)

Remover integralmente os três cards de preço (NR1 / DHO / PDI). No lugar, seção "Como começamos" com trilha horizontal de 4 etapas (timeline ou steps):

1. **Diagnóstico inicial.** "Uma conversa e um retrato dos riscos e oportunidades da sua empresa."
2. **Plano sob medida.** "Escopo, cronograma e indicadores definidos com o seu time."
3. **Implementação e acompanhamento.** "Consultoria em campo, acolhimento clínico e monitoramento contínuo, tudo documentado."
4. **Próximos Passos.** *(Exibir apenas o título e um marcador visual de etapa, SEM texto descritivo. Isso é intencional: a quarta etapa é apresentada ao cliente somente após a entrega excelente das anteriores.)*

CTA ao final da trilha: "Quero diagnosticar minha empresa" (mesmo destino do hero).

**Critérios de aceite:**
- Etapa 4 sem descrição (verificar que nenhum placeholder foi preenchido).
- Nenhum valor monetário na seção.

---

## FASE 8 — Equipe e Prova

### 8A. Equipe (seção existente, ajustar)

Manter fotos e estrutura. Ajustar descrições para destacar credenciais na primeira linha de cada bio:
- Sandro Cabral: abrir com "Psicólogo (CRP), líder clínico e cofundador".
- Weber Jatahy: abrir com "CEO e cofundador, estratégia e desenvolvimento de negócios".
- Demais membros: manter bios atuais, revisando acentuação e removendo travessões se houver.

### 8B. Números de prova (reformular a faixa atual "+200 perfis / +6000 mentorias / +50 pesquisas")

Substituir por:
- **+50** "pesquisas organizacionais realizadas"
- **+200** "perfis comportamentais mapeados"
- **+6.000** "horas de desenvolvimento humano conduzidas"

*(Nota: "mentorias" sai do vocabulário; reenquadrado como horas de desenvolvimento. Não inventar números novos. Se os valores reais divergirem, usar os reais.)*

---

## FASE 9 — Ação: fechamento, contato e CTA final

**Bloco de fechamento (antes do formulário):**

Título: "Comece pelo diagnóstico"
Corpo: "Você já sabe quanto o adoecimento mental custa em mercados como o seu. Falta saber quanto custa na sua empresa, e quanto volta quando você age. Comece pelo diagnóstico."

**CTA final (botão):** "Quero diagnosticar minha empresa"
**Microcopy:** "Sem compromisso. Você recebe um retrato inicial dos riscos e das oportunidades."

**Formulário de contato:** manter campos e endpoint atuais (Formspree `xnnpnopz` → falecom@allcance.co). Ajustar apenas:
- Placeholder do campo Mensagem: "Conte em poucas linhas o momento da sua empresa"
- Texto do botão de envio: "Enviar e receber retorno em 1 dia útil"

**Critérios de aceite:**
- Envio do formulário funcionando (teste real de submit).
- WhatsApp +55 71 99290-5843 clicável com mensagem pré-preenchida.

---

## FASE 10 — SEO, metadados e verificação final

**Metadados novos:**
- `title`: "Allcance | Consultoria em Saúde Mental Corporativa, PGR Psicossocial e NR-1"
- `description`: "Consultoria em saúde mental corporativa de ponta a ponta: diagnóstico de riscos psicossociais, plano de ação, acompanhamento clínico com psicólogos e documentação auditável, sustentados pelo ecossistema Allcare."
- `og:title`: "Allcance | Saúde mental que vira retorno auditável"
- `og:description`: igual à description.
- `keywords`: "saúde mental corporativa, NR-1, riscos psicossociais, PGR psicossocial, FRPRT, DHO, consultoria, Allcare"

**Checklist de verificação final (rodar como QA da entrega):**
1. Grep no código-fonte e no bundle final pelas strings proibidas: "plataforma Allcare", "nossa plataforma", "SaaS", "software Allcare", "assine", "multa", "R$ 2.396", "R$ 6.708", "26 de maio", "fiscalização punitiva". Resultado esperado: zero ocorrências em texto visível.
2. Grep por travessão (caractere U+2014 e U+2013 usados como travessão) em textos visíveis. Corrigir para vírgula ou dois-pontos.
3. Validar acentuação de todo texto novo.
4. Lighthouse: performance e acessibilidade sem regressão relevante versus baseline (registrar baseline antes da Fase 1).
5. Testar em mobile (viewport 380px): carrosséis, abas/acordeão, trilha de etapas.
6. Confirmar redirects do blog (Fase 1) em produção.
7. Etapa 4 da trilha sem descrição.
8. Rodapé inalterado ("Allcance · by Instituto Autogenesis" + CNPJ).

---

## PENDÊNCIAS FORA DO ESCOPO DESTA IMPLEMENTAÇÃO (não bloquear o deploy)

| Pendência | Dono | Impacto futuro no site |
|---|---|---|
| Novo nome do protocolo PSI-NR1 | Weber | Renomear o Card 1 do núcleo quando definido |
| Natureza jurídica do Instituto Autogenesis | Weber | Possível ajuste no rodapé |
| Referendo STF (07 a 18/08/2026) e ADPF 1340 | Monitorar | Possível ajuste fino no bloco "NR-1 como ativo" |
| Cases próprios com números de resultado | Comercial | Promover prova social para logo abaixo do hero quando existir |
| Asset de imagem para o novo hero | Weber/Design | Substituir microfone (TODO no código) |

---

*Documento validado por Weber Jatahy em 13/07/2026. Copy final aprovada. Implementar por fases, commitando ao final de cada fase com mensagem "feat(site): fase N - descrição".*
