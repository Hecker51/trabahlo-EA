document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("botoes-container");
  const descricao = document.getElementById("descricao");

  if (!container) {
    console.error("Elemento #botoes-container não encontrado!");
    return;
  }

  const countries = [
    {
      name: "EUA",
      x: 296,
      y: 243,
      resumo:
        "Liderou o bloco capitalista, financiou países aliados e combateu a expansão do comunismo.",
    },
    {
      name: "Brasil",
      x: 490,
      y: 508,
      resumo:
        "Aliado dos EUA, adotou posturas anticomunistas e sofreu influência durante a ditadura militar.",
    },
    {
      name: "Argentina",
      x: 451,
      y: 631,
      resumo:
        "Sob ditadura, alinhou-se aos interesses ocidentais na América Latina.",
    },
    {
      name: "Rússia",
      x: 1019,
      y: 147,
      resumo:
        "Centro da União Soviética, liderou o bloco socialista e disputou a hegemonia global contra os EUA.",
    },
    {
      name: "Mongólia",
      x: 1167,
      y: 202,
      resumo:
        "Aliada da URSS, serviu de base ideológica e geopolítica contra o bloco ocidental.",
    },
    {
      name: "Austrália",
      x: 1356,
      y: 584,
      resumo:
        "Aliada dos EUA, participou em conflitos como a Guerra do Vietnã.",
    },
    {
      name: "Espanha",
      x: 715,
      y: 234,
      resumo:
        "Embora neutra, abrigou bases americanas e manteve relações próximas ao Ocidente.",
    },
    {
      name: "Portugal",
      x: 694,
      y: 237,
      resumo: "Membro da OTAN, alinhado com o bloco capitalista.",
    },
    {
      name: "Reino Unido",
      x: 730,
      y: 164,
      resumo:
        "Aliado próximo dos EUA, participou da OTAN e de ações contra o comunismo.",
    },
    {
      name: "França",
      x: 750,
      y: 202,
      resumo:
        "Membro da OTAN, com postura independente em alguns momentos da Guerra Fria.",
    },
    {
      name: "Canadá",
      x: 294,
      y: 151,
      resumo:
        "Aliado dos EUA e da OTAN, apoiou ações ocidentais em vários conflitos.",
    },
    {
      name: "Itália",
      x: 794,
      y: 223,
      resumo:
        "Parte da OTAN, com forte oposição interna entre comunistas e anticomunistas.",
    },
    {
      name: "Turquia",
      x: 893,
      y: 243,
      resumo: "Aliado estratégico da OTAN, com fronteira próxima à URSS.",
    },
    {
      name: "China",
      x: 1189,
      y: 262,
      resumo:
        "Aliada da URSS até 1960, depois rival ideológica. Influente na Ásia comunista.",
    },
    {
      name: "Alemanha Ocidental",
      x: 777,
      y: 184,
      resumo:
        "Aliada dos EUA, símbolo do capitalismo europeu fronteiriço com o socialismo.",
    },
    {
      name: "Alemanha Oriental",
      x: 784,
      y: 172,
      resumo: "Satélite soviético, palco de tensão como o Muro de Berlim.",
    },
    {
      name: "Romênia",
      x: 841,
      y: 203,
      resumo:
        "Aliado do bloco soviético, mas com política externa independente em momentos.",
    },
    {
      name: "Hungria",
      x: 814,
      y: 197,
      resumo:
        "Estado socialista sob influência soviética, palco de revoltas anticomunistas.",
    },
    {
      name: "Tchecoslováquia",
      x: 807,
      y: 184,
      resumo: "Aliado soviético, palco da Primavera de Praga e repressão.",
    },
    {
      name: "Polônia",
      x: 818,
      y: 175,
      resumo:
        "Estado socialista, sofreu tensões internas com o movimento Solidariedade.",
    },
  ];

  countries.forEach((pais) => {
    const botao = document.createElement("button");
    botao.className = "pais-botao";
    botao.style.left = `${pais.x}px`;
    botao.style.top = `${pais.y}px`;
    botao.title = pais.name;

    botao.addEventListener("click", () => {
      descricao.innerText = `📍 ${pais.name}: ${pais.resumo}`;
    });

    container.appendChild(botao);
  });
});
