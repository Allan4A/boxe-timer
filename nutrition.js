"use strict";
/* ============ CAPYRA NUTRITION (Phase 2) ============
   Banque de recettes taguées + assembleur de semaine selon les macros
   du panneau « Mes données ». Banque sans porc ni fruits de mer.
   k : catégorie kasher — "v" viande · "l" lait · "p" parve.
   tags : vege, vegan, gf (sans gluten), lf (sans lactose), fish. */

const RECIPES = [
  /* — Petits-déjeuners — */
  { id: "pdj1", n: "Porridge avoine, banane & miel", t: "pdj", k: "l", tags: ["vege"], kcal: 420, P: 15, G: 68, L: 9, ing: [["Flocons d'avoine", 70, "g"], ["Lait demi-écrémé", 250, "ml"], ["Banane", 100, "g"], ["Miel", 10, "g"]], prep: "Cuire l'avoine dans le lait 5 min, ajouter la banane en rondelles et le miel." },
  { id: "pdj2", n: "Skyr, fruits rouges & granola", t: "pdj", k: "l", tags: ["vege"], kcal: 350, P: 28, G: 45, L: 7, ing: [["Skyr nature", 250, "g"], ["Fruits rouges (surgelés ok)", 120, "g"], ["Granola", 30, "g"]], prep: "Assembler dans un bol. Décongeler les fruits 1 min au micro-ondes si besoin." },
  { id: "pdj3", n: "Œufs brouillés, pain complet & avocat", t: "pdj", k: "p", tags: ["vege"], kcal: 430, P: 22, G: 33, L: 23, ing: [["Œufs", 3, "u"], ["Pain complet", 60, "g"], ["Avocat", 70, "g"]], prep: "Brouiller les œufs à feu doux. Servir sur le pain toasté avec l'avocat écrasé, sel et poivre." },
  { id: "pdj4", n: "Tofu brouillé au curcuma & toasts", t: "pdj", k: "p", tags: ["vege", "vegan", "lf"], kcal: 380, P: 24, G: 36, L: 15, ing: [["Tofu ferme", 150, "g"], ["Pain complet", 60, "g"], ["Curcuma", 2, "g"], ["Huile d'olive", 5, "ml"]], prep: "Émietter le tofu, le sauter avec curcuma, sel et poivre. Servir sur toasts." },
  { id: "pdj5", n: "Smoothie banane-épinards protéiné", t: "pdj", k: "p", tags: ["vege", "vegan", "gf", "lf"], kcal: 330, P: 26, G: 42, L: 5, ing: [["Banane", 120, "g"], ["Épinards frais", 40, "g"], ["Protéine végétale en poudre", 30, "g"], ["Boisson d'amande", 250, "ml"]], prep: "Tout mixer 30 secondes. Ajouter des glaçons l'été." },
  { id: "pdj6", n: "Pancakes avoine-banane", t: "pdj", k: "p", tags: ["vege"], kcal: 410, P: 18, G: 62, L: 9, ing: [["Flocons d'avoine", 60, "g"], ["Banane", 100, "g"], ["Œufs", 2, "u"], ["Cannelle", 2, "g"]], prep: "Mixer le tout, cuire en petites crêpes 2 min par face dans une poêle antiadhésive." },
  { id: "pdj7", n: "Yaourt grec, miel & noix", t: "pdj", k: "l", tags: ["vege", "gf"], kcal: 340, P: 20, G: 30, L: 15, ing: [["Yaourt grec 5%", 250, "g"], ["Miel", 15, "g"], ["Noix", 20, "g"]], prep: "Assembler. Option économique : fromage blanc 3% à la place du yaourt grec." },
  { id: "pdj8", n: "Tartines beurre de cacahuète & banane", t: "pdj", k: "p", tags: ["vege", "vegan", "lf"], kcal: 430, P: 15, G: 55, L: 17, ing: [["Pain complet", 80, "g"], ["Beurre de cacahuète", 25, "g"], ["Banane", 100, "g"]], prep: "Toaster, tartiner, ajouter la banane en rondelles et une pincée de cannelle." },
  { id: "pdj9", n: "Omelette champignons & pain complet", t: "pdj", k: "p", tags: ["vege"], kcal: 390, P: 25, G: 30, L: 18, ing: [["Œufs", 3, "u"], ["Champignons", 100, "g"], ["Pain complet", 50, "g"]], prep: "Sauter les champignons, verser les œufs battus, plier l'omelette. Servir avec le pain." },
  { id: "pdj10", n: "Muesli, boisson d'amande & fruits", t: "pdj", k: "p", tags: ["vege", "vegan", "lf"], kcal: 370, P: 11, G: 62, L: 9, ing: [["Muesli sans sucres ajoutés", 70, "g"], ["Boisson d'amande", 250, "ml"], ["Pomme", 100, "g"]], prep: "Assembler dans un bol, pomme en dés par-dessus." },
  /* — Plats (déjeuner / dîner) — */
  { id: "pl1", n: "Poulet rôti, riz basmati & brocoli", t: "plat", k: "v", tags: ["gf", "lf"], kcal: 550, P: 42, G: 60, L: 12, ing: [["Filet de poulet", 160, "g"], ["Riz basmati (cru)", 80, "g"], ["Brocoli", 200, "g"], ["Huile d'olive", 10, "ml"]], prep: "Poulet au four 20 min à 200°C avec paprika fumé et thym. Riz : 80 g cru ≈ 240 g cuit. Brocoli vapeur 8 min." },
  { id: "pl2", n: "Bœuf haché 5%, patate douce & haricots", t: "plat", k: "v", tags: ["gf", "lf"], kcal: 580, P: 40, G: 55, L: 18, ing: [["Bœuf haché 5%", 150, "g"], ["Patate douce", 250, "g"], ["Haricots verts", 200, "g"], ["Cumin", 2, "g"]], prep: "Patate douce en dés au four 25 min. Bœuf sauté au cumin. Haricots vapeur." },
  { id: "pl3", n: "Saumon au four, quinoa & courgettes", t: "plat", k: "p", tags: ["gf", "lf", "fish"], kcal: 560, P: 38, G: 45, L: 22, ing: [["Pavé de saumon", 140, "g"], ["Quinoa (cru)", 70, "g"], ["Courgettes", 200, "g"], ["Citron", 50, "g"]], prep: "Saumon 15 min à 180°C avec citron et thym. Option économique : saumon surgelé (−50%, mêmes Oméga-3)." },
  { id: "pl4", n: "Dahl de lentilles corail & riz", t: "plat", k: "p", tags: ["vege", "vegan", "gf", "lf"], kcal: 520, P: 22, G: 80, L: 10, ing: [["Lentilles corail (crues)", 80, "g"], ["Riz basmati (cru)", 60, "g"], ["Lait de coco léger", 100, "ml"], ["Curry et curcuma", 5, "g"], ["Oignon", 80, "g"]], prep: "Faire revenir l'oignon, ajouter lentilles, épices et 300 ml d'eau, mijoter 15 min, finir au lait de coco." },
  { id: "pl5", n: "Poulet curry-coco & riz", t: "plat", k: "v", tags: ["gf", "lf"], kcal: 600, P: 40, G: 60, L: 20, ing: [["Filet de poulet", 150, "g"], ["Riz basmati (cru)", 75, "g"], ["Lait de coco léger", 120, "ml"], ["Curry", 5, "g"], ["Poivron", 100, "g"]], prep: "Poulet en dés sauté, ajouter poivron, curry et lait de coco, mijoter 10 min." },
  { id: "pl6", n: "Chili sin carne & riz", t: "plat", k: "p", tags: ["vege", "vegan", "gf", "lf"], kcal: 540, P: 22, G: 85, L: 9, ing: [["Haricots rouges (égouttés)", 200, "g"], ["Riz (cru)", 70, "g"], ["Tomates concassées", 200, "g"], ["Maïs", 80, "g"], ["Paprika fumé et cumin", 5, "g"]], prep: "Tout mijoter 15 min sauf le riz, cuit à part. Relevé au piment si tu aimes." },
  { id: "pl7", n: "Escalope de dinde, purée & haricots verts", t: "plat", k: "v", tags: ["gf", "lf"], kcal: 520, P: 42, G: 55, L: 10, ing: [["Escalope de dinde", 160, "g"], ["Pommes de terre", 300, "g"], ["Haricots verts", 200, "g"], ["Huile d'olive", 10, "ml"]], prep: "Purée à l'huile d'olive (sans beurre ni lait). Dinde grillée aux herbes de Provence." },
  { id: "pl8", n: "Pâtes complètes au thon, sauce tomate", t: "plat", k: "p", tags: ["lf", "fish"], kcal: 560, P: 35, G: 75, L: 12, ing: [["Pâtes complètes (crues)", 90, "g"], ["Thon au naturel (égoutté)", 120, "g"], ["Sauce tomate", 150, "g"], ["Origan", 2, "g"]], prep: "Cuire les pâtes al dente, mélanger avec thon et sauce chaude, origan généreux." },
  { id: "pl9", n: "Tofu sauté, légumes & nouilles soba", t: "plat", k: "p", tags: ["vege", "vegan", "lf"], kcal: 530, P: 28, G: 70, L: 14, ing: [["Tofu ferme", 150, "g"], ["Nouilles soba (crues)", 80, "g"], ["Légumes pour wok", 250, "g"], ["Sauce soja légère", 15, "ml"], ["Gingembre frais", 5, "g"]], prep: "Wok bien chaud : tofu doré, puis légumes, gingembre et sauce soja. Nouilles cuites à part." },
  { id: "pl10", n: "Boulettes de bœuf, spaghetti & sauce tomate", t: "plat", k: "v", tags: ["lf"], kcal: 620, P: 38, G: 70, L: 18, ing: [["Bœuf haché 5%", 140, "g"], ["Spaghetti (crus)", 85, "g"], ["Sauce tomate", 180, "g"], ["Oignon", 50, "g"]], prep: "Former les boulettes avec l'oignon haché, dorer puis mijoter 10 min dans la sauce." },
  { id: "pl11", n: "Cabillaud, riz & épinards citronnés", t: "plat", k: "p", tags: ["gf", "lf", "fish"], kcal: 480, P: 38, G: 55, L: 8, ing: [["Dos de cabillaud", 160, "g"], ["Riz (cru)", 70, "g"], ["Épinards", 200, "g"], ["Citron", 50, "g"]], prep: "Cabillaud vapeur ou four 12 min. Épinards tombés à la poêle, jus de citron." },
  { id: "pl12", n: "Salade de quinoa, pois chiches & feta", t: "plat", k: "l", tags: ["vege", "gf"], kcal: 510, P: 22, G: 60, L: 18, ing: [["Quinoa (cru)", 70, "g"], ["Pois chiches (égouttés)", 150, "g"], ["Feta", 50, "g"], ["Concombre", 150, "g"], ["Huile d'olive", 10, "ml"]], prep: "Quinoa refroidi, tout mélanger, citron et menthe si dispo." },
  { id: "pl13", n: "Wrap de poulet & crudités", t: "plat", k: "v", tags: ["lf"], kcal: 520, P: 35, G: 55, L: 15, ing: [["Filet de poulet", 130, "g"], ["Tortillas de blé", 2, "u"], ["Crudités variées", 150, "g"], ["Houmous", 40, "g"]], prep: "Poulet grillé en lanières, garnir les wraps avec houmous et crudités." },
  { id: "pl14", n: "Curry de pois chiches & épinards, riz", t: "plat", k: "p", tags: ["vege", "vegan", "gf", "lf"], kcal: 530, P: 18, G: 80, L: 13, ing: [["Pois chiches (égouttés)", 200, "g"], ["Riz (cru)", 70, "g"], ["Épinards", 150, "g"], ["Lait de coco léger", 100, "ml"], ["Curry", 5, "g"]], prep: "Mijoter pois chiches, épinards, curry et lait de coco 10 min. Riz à part." },
  { id: "pl15", n: "Steak haché, œuf à cheval & riz", t: "plat", k: "v", tags: ["gf", "lf"], kcal: 590, P: 45, G: 55, L: 18, ing: [["Steak haché 5%", 150, "g"], ["Œuf", 1, "u"], ["Riz (cru)", 75, "g"], ["Salade verte", 80, "g"]], prep: "Steak grillé, œuf au plat dessus, riz et salade en accompagnement." },
  { id: "pl16", n: "Poulet citron & pommes de terre rôties", t: "plat", k: "v", tags: ["gf", "lf"], kcal: 540, P: 40, G: 50, L: 16, ing: [["Filet de poulet", 160, "g"], ["Pommes de terre", 280, "g"], ["Citron", 60, "g"], ["Romarin", 2, "g"], ["Huile d'olive", 10, "ml"]], prep: "Tout au four 30 min à 200°C, citron en quartiers, romarin." },
  { id: "pl17", n: "Grande omelette, salade & pain complet", t: "plat", k: "p", tags: ["vege"], kcal: 450, P: 26, G: 35, L: 22, ing: [["Œufs", 3, "u"], ["Salade verte", 100, "g"], ["Pain complet", 60, "g"], ["Tomates", 100, "g"]], prep: "Omelette baveuse, salade vinaigrette légère, pain toasté." },
  { id: "pl18", n: "Riz sauté aux œufs & légumes", t: "plat", k: "p", tags: ["vege", "lf"], kcal: 500, P: 18, G: 75, L: 12, ing: [["Riz (cru)", 80, "g"], ["Œufs", 2, "u"], ["Légumes pour wok", 200, "g"], ["Sauce soja légère", 15, "ml"]], prep: "Riz cuit refroidi sauté au wok avec légumes, œufs brouillés incorporés en fin." },
  { id: "pl19", n: "Saumon teriyaki, riz & brocoli", t: "plat", k: "p", tags: ["lf", "fish"], kcal: 580, P: 36, G: 65, L: 16, ing: [["Pavé de saumon", 140, "g"], ["Riz (cru)", 75, "g"], ["Brocoli", 200, "g"], ["Sauce soja légère", 20, "ml"], ["Miel", 8, "g"]], prep: "Laquer le saumon sauce soja-miel-gingembre, four 14 min." },
  { id: "pl20", n: "Soupe de lentilles & carottes, pain complet", t: "plat", k: "p", tags: ["vege", "vegan", "lf"], kcal: 450, P: 20, G: 70, L: 8, ing: [["Lentilles vertes (crues)", 80, "g"], ["Carottes", 200, "g"], ["Oignon", 80, "g"], ["Pain complet", 60, "g"], ["Cumin", 3, "g"]], prep: "Mijoter 25 min, mixer grossièrement, cumin au service." },
  /* — Collations — */
  { id: "sn1", n: "Skyr nature & miel", t: "snack", k: "l", tags: ["vege", "gf"], kcal: 150, P: 17, G: 18, L: 0, ing: [["Skyr nature", 150, "g"], ["Miel", 8, "g"]], prep: "Option économique : fromage blanc 0% (−50%, quasi mêmes protéines)." },
  { id: "sn2", n: "Poignée d'amandes", t: "snack", k: "p", tags: ["vege", "vegan", "gf", "lf"], kcal: 180, P: 6, G: 6, L: 15, ing: [["Amandes", 30, "g"]], prep: "Amandes en vrac : mêmes macros que le bio premium, −30 à 40%." },
  { id: "sn3", n: "Pomme & beurre de cacahuète", t: "snack", k: "p", tags: ["vege", "vegan", "gf", "lf"], kcal: 200, P: 5, G: 25, L: 9, ing: [["Pomme", 150, "g"], ["Beurre de cacahuète", 15, "g"]], prep: "Pomme en quartiers à tremper." },
  { id: "sn4", n: "Deux zŒufs durs", t: "snack", k: "p", tags: ["vege", "gf", "lf"], kcal: 140, P: 12, G: 1, L: 10, ing: [["Œufs", 2, "u"]], prep: "9 minutes dans l'eau bouillante. À préparer d'avance pour la semaine." },
  { id: "sn5", n: "Shake protéiné", t: "snack", k: "p", tags: ["vege", "gf", "lf"], kcal: 160, P: 25, G: 8, L: 3, ing: [["Protéine en poudre (whey ou végétale)", 30, "g"], ["Eau ou boisson viégétale", 250, "ml"]], prep: "Idéal dans les 30 min post-entraînement (whey) ou le soir (caséine)." },
  { id: "sn6", n: "Cottage cheese & ananas", t: "snack", k: "l", tags: ["vege", "gf"], kcal: 160, P: 18, G: 16, L: 2, ing: [["Cottage cheese", 150, "g"], ["Ananas", 80, "g"]], prep: "Frais et rassasiant." },
  { id: "sn7", n: "Houmous & bâtonnets de légumes", t: "snack", k: "p", tags: ["vege", "vegan", "gf", "lf"], kcal: 170, P: 6, G: 15, L: 10, ing: [["Houmous", 60, "g"], ["Carottes et concombre", 150, "g"]], prep: "Bâtonnets à tremper." },
  { id: "sn8", n: "Banane & chocolat noir", t: "snack", k: "p", tags: ["vege", "vegan", "gf", "lf"], kcal: 165, P: 2, G: 30, L: 4, ing: [["Banane", 120, "g"], ["Chocolat noir 70%", 10, "g"]], prep: "Le petit plaisir qui tient dans le budget." }
];

const DAY_NAMES = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const SLOT_SPLIT = { pdj: 0.25, dej: 0.34, din: 0.29, snack: 0.12 };
const SLOT_LABEL = { pdj: "Petit-déj", dej: "Déjeuner", din: "Dîner", snack: "Collation" };
const KOSHER_LABEL = { v: "viande", l: "lait", p: "parve" };

function nutriFilter(diet) {
  return RECIPES.filter(r => {
    if (diet === "vege") return r.k !== "v" && !r.tags.includes("fish");
    if (diet === "vegan") return r.tags.includes("vegan");
    if (diet === "sansgluten") return r.tags.includes("gf");
    if (diet === "sanslactose") return r.tags.includes("lf");
    return true; // standard, kasher, halal : toute la banque (sans porc ni fruits de mer)
  });
}
function kosherOkForSlot(r, slot, diet) {
  if (diet !== "kasher") return true;
  if (slot === "pdj") return r.k !== "v";       // matinée lactée ou parve
  if (slot === "snack") return r.k === "p";      // collations parve (entre repas carnés)
  return r.k !== "l";                            // déj/dîner : viande ou parve
}
function pickRecipe(pool, slot, diet, recent) {
  const slotType = slot === "pdj" ? "pdj" : slot === "snack" ? "snack" : "plat";
  let c = pool.filter(r => r.t === slotType && kosherOkForSlot(r, slot, diet) && !recent.includes(r.id));
  if (!c.length) c = pool.filter(r => r.t === slotType && kosherOkForSlot(r, slot, diet));
  if (!c.length) return null;
  return c[Math.floor(Math.random() * c.length)];
}
function scaleTo(r, targetK) {
  let s = targetK / r.kcal;
  s = Math.max(0.7, Math.min(1.6, s));
  return Math.round(s * 20) / 20;
}
function genWeek(b, diet) {
  const m = calcMacros(b);
  const pool = nutriFilter(diet);
  const recent = [];
  const days = DAY_NAMES-map(dn => {
    const meals = [];
    let totK = 0, totP = 0;
    ["pdj", "dej", "din", "snack"].forEach(slot => {
      const tK = m.target * SLOT_SPLIT[slot];
      const r = pickRecipe(pool, slot, diet, recent);
      if (!r) return;
      const s = scaleTo(r, tK);
      meals.push({ slot, id: r.id, s, kcal: Math.round(r.kcal * s), P: Math.round(r.P * s), G: Math.round(r.G * s), L: Math.round(r.L * s) });
      totK += Math.round(r.kcal * s);
      totP += Math.round(r.P * s);
      recent.push(r.id);
      if (recent.length > 8) recent.shift();
    });
    // Renfort protéique si besoin : remplace la collation par la plus protéjée admissible
    if (totP < m.protG * 0.85) {
      const snIdx = meals.findIndex(x => x.slot === "snack");
      const best = pool.filter(r => r.t === "snack" && kosherOkForSlot(r, "snack", diet)).sort((a, bb) => bb.P - a.P)[0];
      if (best && snIdx >= 0 && meals[snIdx].id !== best.id) {
        const s = scaleTo(best, m.target * SLOT_SPLIT.snack);
        totK += Math.round(best.kcal * s) - meals[snIdx].kcal;
        totP += Math.round(best.P * s) - meals[snIdx].P;
        meals[snIdx] = { slot: "snack", id: best.id, s, kcal: Math.round(best.kcal * s), P: Math.round(best.P * s), G: Math.round(best.G * s), L: Math.round(best.L * s) };
      }
    }
    return { day: dn, meals, totK, totP };
  });
  return { days, m: { target: m.target, protG: m.protG, carbG: m.carbG, fatG: m.fatG, tdee: m.tdee }, diet, created: new Date().toISOString() };
}
function recipeById(id) { return RECIPES.find(r => r.id === id); }
function groceryList(week) {
  const agg = {};
  week.days.forEach(d => d.meals.forEach(mm => {
    const r = recipeById(mm.id);
    if (!r) return;
    r.ing.forEach(([n, q, u]) => {
      const key = n + "|" + u;
      agg[key] = (agg[key] || 0) + q * mm.s;
    });
  }));
  return Object.entries(agg).map(([key, q]) => {
    const [n, u] = key.split("|");
    return { n, u, q: u === "u" ? Math.ceil(q) : Math.round(q / 5) * 5 };
  }).sort((a, b) => a.n.localeCompare(b.n, "fr"));
}

/* ============ RENDU ============ */
function nutriRender(week) {
  const meta = document.getElementById("nMeta");
  const wrap = document.getElementById("nWeek");
  if (!week) { if (wrap) wrap.innerHTML = ""; if (meta) meta.textContent = ""; return; }
  const dietLbl = { standard: "Standard", vege: "Végétarien", vegan: "Vegan", kasher: "Kasher", halal: "Halal", sansgluten: "Sans gluten", sanslactose: "Sans lactose" }[week.diet] || week.diet;
  if (meta) meta.textContent = week.m.target + " kcal/j · " + week.m.protG + " g prot. · régime " + dietLbl;
  wrap.innerHTML = "";

  week.days.forEach((d, dayIdx) => {
    const card = document.createElement("div");
    card.className = "day-card" + (dayIdx === 0 ? " open" : "");

    const header = document.createElement("div");
    header.className = "day-card-header";
    header.innerHTML =
      "<span class='day-card-title'>" + d.day + "</span>" +
      "<span class='day-card-kcal'>" + d.totK + " kcal · " + d.totP + " g prot.</span>" +
      "<span class='day-card-arrow'>▼</span>";
    header.addEventListener("click", () => {
      card.classList.toggle("open");
    });

    const body = document.createElement("div");
    body.className = "day-card-body";

    d.meals.forEach(mm => {
      const r = recipeById(mm.id);
      if (!r) return;
      const scale = mm.s !== 1 ? " <span style='font-size:.72rem;color:var(--muted)'>(×" + mm.s.toLocaleString("fr-FR") + ")</span>" : "";
      const kosherTag = week.diet === "kasher" ? ' <span class="n-k-chip">' + KOSHER_LABEL_r.k] + "</span>" : "";
      const ingList = r.ing.map(([n, q, u]) =>
        n + " <strong>" + (u === "u" ? Math.ceil(q * mm.s) : Math.round(q * mm.s)) + (u === "u" ? "" : " " + u) + "</strong>"
      ).join(" · ");

      const meal = document.createElement("div");
      meal.className = "meal-card";
      meal.innerHTML =
        "<div class='meal-slot-label'>" + SLOT_LABEL_mm.slot] + "</div>" +
        "<div class='meal-name'>" + r.n + scale + kosherTag + "</div>" +
        "<div class='meal-macros'>" +
          "<span class='macro-chip mc-kcal'>" + mm.kcal + " kcal</span>" +
          "<span class='macro-chip mc-p'>" + mm.P + " g P</span>" +
          "<span class='macro-chip mc-g'>" + mm.G + " g G</span>" +
          "<span class='macro-chip mc-l'>" + mm.L + " g L</span>" +
        "</div>" +
        "<div class='meal-ing'>" + ingList + "</div>" +
        "<div class='meal-prep'>" + r.prep + "</div>";
      body.appendChild(meal);
    });

    card.appendChild(header);
    card.appendChild(body);
    wrap.appendChild(card);
  });

  // Grocery list
  const gl = groceryList(week);
  const glEl = document.getElementById("nGroceryList");
  const glSection = document.getElementById("grocerySection");
  if (glEl) {
    glEl.innerHTML = gl.map(i =>
      "<div class='n-g'>" + i.n + " — <strong>" + i.q + (i.u === "u" ? "" : " " + i.u) + "</strong></div>"
    ).join("");
  }
  if (glSection) glSection.style.display = "";
  const pptBtn = document.getElementById("nPpt");
  if (pptBtn) pptBtn.classList.remove("hidden");
}
function nutriSave(week) { try { localStorage.setItem(sk("capyraWeek"), JSON.stringify(week)); } catch (e) {} }
function nutriLoad() {
  try { return JSON.parse(localStorage.getItem(sk("capyraWeek")) || "null"); } catch (e) { return null; }
}
function nutriGenerate() {
  if (!body) return;
  const diet = document.getElementById("nDiet").value;
  const week = genWeek(body, diet);
  nutriSave(week);
  nutriRender(week);
}

/* ============ EXPOP�POWERPOINT (PptxGenJS — bible Capyra) ============ */
function loadPptxLib(cb) {
  if (window.PptxGenJS) return cb();
  const s = document.createElement("script");
  s.src = "https://cdnjs.cloudflare.com/ajax/libs/PptxGenJS/3.12.0/pptxgen.bundle.min.js";
  s.onload = cb;
  s.onerror = () => alert("Connexion requise pour l'export PowerPoint.");
  document.head.appendChild(s);
}
const PPT_C = { brun: "6E4E3A", sable: "F4EDE66", sauge: "5F8F7B", corail: "FF6B4A", anthra: "2E2E2E" };
function nutriExportPpt() {
  const week = nutriLoad();
  if (!week) return;
  loadPptxLib(() => {
    const pptx = new PptxGenJS();
    pptx.defineLayout({ name: "W", width: 13.33, height: 7.5 });
    pptx.layout = "W ";
    const P = getProfile(profileId);
    // Couverture
    let s = pptx.addSlide();
    s.background = { color: PPT_C.sable };
    s.addText("Capyra", { x: 0.6, y: 0.6, w: 8, h: 1, fontSize: 40, bold: true, color: PPT_C.brun, fontFace: "Poppins" });
    s.addText("Capy mind, Happy life", { x: 0.6, y: 1.5, w: 8, h: 0.5, fontSize: 16, italic: true, color: PPT_C.sauge });
    s.addText("Programme nutritionnel — " + (P ? P.name : "") , { x: 0.6, y: 2.6, w: 12, h: 0.7, fontSize: 26, bold: true, color: PPT_C.anthra });
    s.addText("Objectif : " + week.m.target + " kcal/j · Protéines " + week.m.protG + " g · Glucides " + week.m.carbG + " g · Lipides " + week.m.fatG + " g",
      { x: 0.6, y: 3.4, w: 12, h: 0.5, fontSize: 16, color: PPT_C.anthra });
    s.addText("⚠ Programme généré automatiquement — il ne remplace pas un suivi médical ou un diététicien-nutritionniste.",
      { x: 0.6, y: 6.6, w: 12, h: 0.5, fontSize: 11, italic: true, color: PPT_C.brun });
    // Jours
    week.days.forEach(d => {
      const sl = pptx.addSlide();
      sl.background = { color: PPT_C.sable };
      sl.addText(d.day + " — " + d.totK + " kcal · " + d.totP + " g protéines",
        { x: 0.5, y: 0.4, w: 12, h: 0.6, fontSize: 24, bold: true, color: PPT_C.brun, fontFace: "Poppins" });
      let y = 1.3;
      d.meals.forEach(mm => {
        const r = recipeById(mm.id);
        sl.addText(SLOT_LABEL[mm.slot] + " — " + r.n + (mm.s !== 1 ? " (×" + mm.s + ")" : ""),
          { x: 0.5, y, w: 9, h: 0.4, fontSize: 16, bold: true, color: PPT_C.anthra });
        sl.addText(mm.kcal + " kcal · " + mm.P + "P/" + mm.G + "G/" + mm.L + "L",
          { x: 9.7, y, w: 3.2, h: 0.4, fontSize: 13, color: PPT_C.corail, bold: true });
        y += 0.42;
        sl.addText(r.ing.map(([n, q, u]) => n + " " + (u === "u" ? Math.ceil(q * mm.s) : Math.round(q * mm.s)) + (u === "u" ? "" : " " + u)).join(" · "),
          { x: 0.7, y, w: 12, h: 0.35, fontSize: 11, color: PPT_C.anthra });
        y += 0.34;
        sl.addText(r.prep, { x: 0.7, y, w: 12, h: 0.35, fontSize: 10, italic: true, color: PPT_C.sauge });
        y += 0.55;
      });
    });
    // Liste de courses
    const gl = groceryList(week);
    const sg = pptx.addSlide();
    sg.background = { color: PPT_C.sable };
    sg.addText("🛒 Liste de courses de la semaine", { x: 0.5, y: 0.4, w: 12, h: 0.6, fontSize: 24, bold: true, color: PPT_C.brun, fontFace: "Poppins" });
    const half = Math.ceil(gl.length / 2);
    [gl.slice(0, half), gl.slice(half)].forEach((col, i) => {
      sg.addText(col.map(it => it.n + " — " + it.q + (it.u === "u" ? "" : " " + it.u)).join("\n"),
        { x: 0.6 + i * 6.4, y: 1.2, w: 6, h: 5.8, fontSize: 12, color: PPT_C.anthra, lineSpacing: 18 });
    });
    // Hydratation (slide systématique bible)
    const sh = pptx.addSlide();
    sh.background = { color: PPT_C.sable };
    sh.addText("💧 Hydratation", { x: 0.5, y: 0.4, w: 12, h: 0.6, fontSize: 24, bold: true, color: PPT_C.brun, fontFace: "Poppins" });
    sh.addText("Objectif quotidien : 1,5 à 2,5 L selon ton poids, ton activité et la saison.\n\n• 1 verre au réveil\n• 1 verre avant chaque repas\n\n• Limiter café < 2 par jour\n• Eviter les sodas", { x: 0.6, y: 1.2, w: 12, h: 5.5, fontSize: 14, color: PPT_C.anthra, lineSpacing: 24 });
    pptx.writeFile({ fileName: "Capyra_Programme_Nutritionnel.pptx" });
  });
}