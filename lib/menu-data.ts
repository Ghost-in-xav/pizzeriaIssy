export type MenuTag = "signature" | "vegetarian" | "spicy" | "vegan";

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  tags?: MenuTag[];
  image?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  intro: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "pizzas",
    label: "Nos Pizzas",
    intro: "Pâte à pizza faite maison, maturée lentement, cuite au four traditionnel.",
    items: [
      {
        name: "Baby Pizza",
        description: "Sauce tomate, mozzarella fior di latte, jambon blanc.",
        price: 9.0,
        tags: [],
      },
      {
        name: "Margherita",
        description: "Sauce tomate, mozzarella fior di latte, feuilles de basilic.",
        price: 12.0,
        tags: ["vegetarian"],
        image:
          "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Végétarienne",
        description:
          "Sauce tomate, mozzarella fior di latte, aubergine, courgette, champignons, oignon rouge, poivrons, olives leccino, feuilles de basilic.",
        price: 14.5,
        tags: ["vegetarian"],
      },
      {
        name: "Campione",
        description:
          "Sauce tomate, mozzarella fior di latte, viande de bœuf hachée, champignons, olives leccino, feuilles de basilic.",
        price: 15.9,
      },
      {
        name: "Regina",
        description:
          "Sauce tomate, mozzarella fior di latte, jambon blanc, champignons, feuilles de basilic.",
        price: 15.9,
      },
      {
        name: "Sicilienne",
        description:
          "Sauce tomate, mozzarella fior di latte, thon, oignons rouges, fleur de câpre, olives leccino, feuilles de basilic.",
        price: 15.9,
      },
      {
        name: "Napolitaine",
        description:
          "Sauce tomate, mozzarella fior di latte, anchois, tomate cerise, câpre, oignons rouges, olives leccino, origan séché, feuilles de basilic.",
        price: 15.9,
      },
      {
        name: "Pollo",
        description:
          "Crème fraîche, mozzarella fior di latte, poulet, champignons, poivrons, olives leccino, feuilles de basilic.",
        price: 15.9,
      },
      {
        name: "Quatre Fromages",
        description:
          "Mozzarella fior di latte, gorgonzola, taleggio, scamorza (mozzarella fumée), huile d'olive, origan séché, feuilles de basilic.",
        price: 15.9,
        tags: ["vegetarian"],
      },
      {
        name: "Quatre Saisons",
        description:
          "Sauce tomate, mozzarella fior di latte, jambon blanc, champignons, olives leccino, artichauts, poivrons, feuilles de basilic.",
        price: 16.9,
      },
      {
        name: "Calzone",
        description:
          "Sauce tomate, mozzarella fior di latte, jambon blanc, œuf, champignon, feuilles de basilic, roquette (à part).",
        price: 16.9,
      },
      {
        name: "Pizza d'Issy",
        description:
          "Sauce tomate, mozzarella fior di latte, burrata, roquette, crème de balsamique, tomate cerise, feuilles de basilic.",
        price: 16.9,
        tags: ["signature", "vegetarian"],
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Salmone",
        description:
          "Crème fraîche, mozzarella fior di latte, saumon fumé, tomate cerise, oignons rouges, citron, aneth, feuilles de basilic.",
        price: 16.9,
      },
      {
        name: "Campione Fumée",
        description:
          "Sauce tomate, mozzarella fior di latte, viande de bœuf hachée, champignons, scamorza, olives leccino, feuilles de basilic.",
        price: 16.9,
      },
      {
        name: "N'Duja",
        description:
          "Sauce tomate, mozzarella fior di latte, N'duja (charcuterie épicée et fumée), oignons rouges, poivrons, tomate cerise, olives leccino, feuilles de basilic.",
        price: 16.9,
        tags: ["spicy"],
      },
      {
        name: "Diavola",
        description:
          "Sauce tomate, mozzarella fior di latte, spianata (charcuterie épicée), oignons rouges, poivrons, tomate cerise, olives leccino, feuilles de basilic.",
        price: 16.9,
        tags: ["spicy"],
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Pizza de Voisin d'Issy",
        description:
          "Mozzarella fior di latte, gorgonzola, taleggio, scamorza (mozzarella fumée), viande de bœuf hachée, origan séché, feuilles de basilic.",
        price: 17.5,
        tags: ["signature"],
      },
      {
        name: "Reine Truffée",
        description:
          "Crème de truffe d'été (tuber aestivum), mozzarella fior di latte, jambon blanc, champignons, feuilles de basilic.",
        price: 17.9,
        tags: ["signature"],
      },
      {
        name: "Parma",
        description:
          "Sauce tomate, mozzarella fior di latte, jambon de Parme, roquette, crème de balsamique, parmesan, feuilles de basilic.",
        price: 17.9,
        tags: ["signature"],
      },
      {
        name: "Tartufata à la Burrata",
        description:
          "Crème de truffe d'été (tuber aestivum), mozzarella fior di latte, roquette, tomate cerise, champignons, burrata, crème de balsamique, feuilles de basilic.",
        price: 18.9,
        tags: ["signature", "vegetarian"],
      },
    ],
  },
  {
    id: "salades",
    label: "Salades",
    intro:
      "Accompagnées d'un petit pain frais maison. Fraîches, généreuses, vinaigrette maison.",
    items: [
      {
        name: "Salade Antipasti",
        description:
          "Mesclun, champignons, antipasti de légumes (courgettes, aubergines, poivrons), tomates cerises, vinaigrette maison, crème de balsamique.",
        price: 13.5,
        tags: ["vegetarian"],
      },
      {
        name: "Salade au Jambon Blanc",
        description:
          "Mesclun, champignons, jambon blanc, antipasti de légumes, tomates cerises, copeaux de parmesan, vinaigrette maison, crème de balsamique.",
        price: 15.9,
      },
      {
        name: "Salade Burrata",
        description:
          "Mesclun, burrata 125g, champignons, antipasti de légumes, tomates cerises, vinaigrette maison, crème de balsamique.",
        price: 16.9,
        tags: ["signature", "vegetarian"],
      },
      {
        name: "Focaccia",
        description:
          "Focaccia (pâte pizza), mesclun, burrata 125g, champignons, antipasti de légumes, tomates cerises, vinaigrette maison, crème de balsamique.",
        price: 17.9,
        tags: ["vegetarian"],
      },
      {
        name: "Salade au Jambon de Parme",
        description:
          "Mesclun, champignons, jambon de Parme, antipasti de légumes, tomates cerises, copeaux de parmesan, vinaigrette maison, crème de balsamique.",
        price: 17.9,
      },
      {
        name: "Salade Burrata à la Truffe",
        description:
          "Mesclun, burrata 125g, truffe d'été (tuber aestivum), champignons, antipasti de légumes, tomates cerises, vinaigrette maison, crème de balsamique.",
        price: 18.9,
        tags: ["signature", "vegetarian"],
      },
      {
        name: "Salade d'Issy",
        description:
          "Mesclun, burrata 125g, jambon de Parme, jambon blanc, champignons, antipasti de légumes, tomates cerises, copeaux de parmesan, vinaigrette maison, crème de balsamique.",
        price: 19.9,
        tags: ["signature"],
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    intro: "Pâtes artisanales, sauces préparées le jour même.",
    items: [
      {
        name: "Alla Norma",
        description:
          "Sauce tomate, aubergines, ail, parmesan, feuilles de basilic.",
        price: 12.9,
        tags: ["vegetarian"],
      },
      {
        name: "Végétarienne",
        description:
          "Sauce tomate, aubergine, courgette, champignons, parmesan.",
        price: 14.9,
        tags: ["vegetarian"],
      },
      {
        name: "Pâtes au Pesto",
        description:
          "Sauce pesto, pignons de pin, copeaux de parmesan, feuilles de basilic.",
        price: 14.9,
        tags: ["vegetarian"],
      },
      {
        name: "Tartufata",
        description:
          "Crème de truffe d'été (tuber aestivum), champignons, copeaux de parmesan.",
        price: 14.9,
        tags: ["vegetarian"],
      },
      {
        name: "Quatre Fromages",
        description:
          "Mozzarella fior di latte, gorgonzola, taleggio, scamorza (mozzarella fumée), parmesan, origan.",
        price: 15.9,
        tags: ["vegetarian"],
      },
      {
        name: "Pollo",
        description:
          "Crème fraîche, poulet, champignons, persil, poivre, copeaux de parmesan.",
        price: 15.9,
      },
      {
        name: "Salmone",
        description: "Crème fraîche, saumon fumé, citron, aneth.",
        price: 16.9,
      },
      {
        name: "Alla N'Duja",
        description:
          "Sauce tomate, N'duja (charcuterie épicée et fumée), ail, feuilles de basilic.",
        price: 16.9,
        tags: ["spicy"],
      },
      {
        name: "Tartufata à la Burrata",
        description:
          "Crème de truffe, champignons, burrata, copeaux de parmesan, sauce de basilic.",
        price: 17.9,
        tags: ["signature", "vegetarian"],
      },
    ],
  },
];

export const bestSellers: MenuItem[] = [
  // Margherita D.O.P.
  menu[0].items.find((i) => i.name === "Margherita")!,
  // Pizza d'Issy (the house signature)
  menu[0].items.find((i) => i.name === "Pizza d'Issy")!,
  // Tartufata à la Burrata (premium pizza)
  menu[0].items.find((i) => i.name === "Tartufata à la Burrata")!,
];
