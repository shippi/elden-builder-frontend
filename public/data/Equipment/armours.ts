import { Armour } from "@/helpers/types";

export const armours: Armour[] =[
  {
    "id": "40000",
    "name": "Iron Helmet",
    "category": "Head",
    "image": "/equipment_images/armours/Iron_Helmet.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.1,
      "slash": 4,
      "pierce": 4.2,
      "magic": 2.5,
      "fire": 3.1,
      "lightning": 2.3,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 12,
      "robustness": 18,
      "focus": 8,
      "vitality": 8
    },
    "poise": 6,
    "weight": 3.8
  },
  {
    "id": "40100",
    "name": "Scale Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Scale_Armor.webp",
    "dmgNegation": {
      "physical": 11.9,
      "strike": 10.2,
      "slash": 12.4,
      "pierce": 10.9,
      "magic": 7.1,
      "fire": 10.9,
      "lightning": 6.7,
      "holy": 8
    },
    "resistances": {
      "immunity": 25,
      "robustness": 46,
      "focus": 11,
      "vitality": 21
    },
    "poise": 18,
    "weight": 8.8
  },
  {
    "id": "40200",
    "name": "Iron Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Iron_Gauntlets.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 2.3,
      "slash": 2.9,
      "pierce": 2.9,
      "magic": 2.1,
      "fire": 2.3,
      "lightning": 1.5,
      "holy": 1.9
    },
    "resistances": {
      "immunity": 8,
      "robustness": 15,
      "focus": 6,
      "vitality": 4
    },
    "poise": 4,
    "weight": 2.9
  },
  {
    "id": "40300",
    "name": "Leather Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Leather_Trousers.webp",
    "dmgNegation": {
      "physical": 6.5,
      "strike": 5.4,
      "slash": 6.8,
      "pierce": 6.8,
      "magic": 5,
      "fire": 5.4,
      "lightning": 3.4,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 16,
      "robustness": 29,
      "focus": 11,
      "vitality": 7
    },
    "poise": 11,
    "weight": 5.5
  },
  {
    "id": "50000",
    "name": "Kaiden Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Kaiden_Helm.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.4,
      "slash": 4.4,
      "pierce": 4.4,
      "magic": 3.1,
      "fire": 3.4,
      "lightning": 2.8,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 12,
      "robustness": 22,
      "focus": 9,
      "vitality": 9
    },
    "poise": 7,
    "weight": 4
  },
  {
    "id": "50100",
    "name": "Kaiden Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Kaiden_Armor.webp",
    "dmgNegation": {
      "physical": 11.9,
      "strike": 8.8,
      "slash": 11.9,
      "pierce": 11.9,
      "magic": 8,
      "fire": 8.8,
      "lightning": 7.1,
      "holy": 8
    },
    "resistances": {
      "immunity": 25,
      "robustness": 55,
      "focus": 11,
      "vitality": 11
    },
    "poise": 18,
    "weight": 8.8
  },
  {
    "id": "50200",
    "name": "Kaiden Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Kaiden_Gauntlets.webp",
    "dmgNegation": {
      "physical": 2.9,
      "strike": 2.1,
      "slash": 2.9,
      "pierce": 2.9,
      "magic": 1.9,
      "fire": 2.1,
      "lightning": 1.7,
      "holy": 1.9
    },
    "resistances": {
      "immunity": 8,
      "robustness": 15,
      "focus": 6,
      "vitality": 6
    },
    "poise": 4,
    "weight": 2.9
  },
  {
    "id": "50300",
    "name": "Kaiden Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Kaiden_Trousers.webp",
    "dmgNegation": {
      "physical": 6.5,
      "strike": 4.5,
      "slash": 6.5,
      "pierce": 6.5,
      "magic": 4,
      "fire": 4.5,
      "lightning": 3.8,
      "holy": 4
    },
    "resistances": {
      "immunity": 15,
      "robustness": 26,
      "focus": 7,
      "vitality": 7
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "60000",
    "name": "Drake Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Drake_Knight_Helm.webp",
    "dmgNegation": {
      "physical": 4,
      "strike": 3.4,
      "slash": 4.2,
      "pierce": 4,
      "magic": 3.6,
      "fire": 4,
      "lightning": 3.1,
      "holy": 3.6
    },
    "resistances": {
      "immunity": 11,
      "robustness": 20,
      "focus": 9,
      "vitality": 9
    },
    "poise": 6,
    "weight": 4
  },
  {
    "id": "60100",
    "name": "Drake Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Drake_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 11.4,
      "strike": 9.5,
      "slash": 11.9,
      "pierce": 11.4,
      "magic": 10.2,
      "fire": 11.4,
      "lightning": 8.8,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 25,
      "robustness": 46,
      "focus": 21,
      "vitality": 21
    },
    "poise": 19,
    "weight": 9.2
  },
  {
    "id": "60200",
    "name": "Drake Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Drake_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 2.3,
      "slash": 2.9,
      "pierce": 2.8,
      "magic": 2.5,
      "fire": 2.8,
      "lightning": 2.1,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 8,
      "robustness": 15,
      "focus": 7,
      "vitality": 7
    },
    "poise": 4,
    "weight": 3.1
  },
  {
    "id": "60300",
    "name": "Drake Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Drake_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 6.5,
      "strike": 5.4,
      "slash": 6.8,
      "pierce": 6.5,
      "magic": 5.8,
      "fire": 6.5,
      "lightning": 5,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 16,
      "robustness": 29,
      "focus": 13,
      "vitality": 13
    },
    "poise": 11,
    "weight": 5.7
  },
  {
    "id": "61000",
    "name": "Drake Knight Helm (Altered)",
    "category": "Head",
    "image": "/equipment_images/armours/Drake_Knight_Helm_(Altered).webp",
    "dmgNegation": {
      "physical": 3.6,
      "strike": 2.9,
      "slash": 3.8,
      "pierce": 3.6,
      "magic": 3.2,
      "fire": 3.6,
      "lightning": 2.6,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 9,
      "robustness": 16,
      "focus": 7,
      "vitality": 7
    },
    "poise": 6,
    "weight": 3.6
  },
  {
    "id": "61100",
    "name": "Drake Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Drake_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 11.2,
      "strike": 8.6,
      "slash": 11.2,
      "pierce": 10.7,
      "magic": 8,
      "fire": 9.5,
      "lightning": 6.7,
      "holy": 8
    },
    "resistances": {
      "immunity": 21,
      "robustness": 34,
      "focus": 10,
      "vitality": 10
    },
    "poise": 16,
    "weight": 8.3
  },
  {
    "id": "80000",
    "name": "Scaled Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Scaled_Helm.webp",
    "dmgNegation": {
      "physical": 5.8,
      "strike": 5,
      "slash": 6.1,
      "pierce": 5.8,
      "magic": 4.8,
      "fire": 5,
      "lightning": 4.6,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 24,
      "robustness": 35,
      "focus": 16,
      "vitality": 16
    },
    "poise": 11,
    "weight": 6.8
  },
  {
    "id": "80100",
    "name": "Scaled Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Scaled_Armor.webp",
    "dmgNegation": {
      "physical": 16,
      "strike": 13.9,
      "slash": 16.8,
      "pierce": 16,
      "magic": 13.5,
      "fire": 14.1,
      "lightning": 13,
      "holy": 13.5
    },
    "resistances": {
      "immunity": 57,
      "robustness": 83,
      "focus": 38,
      "vitality": 38
    },
    "poise": 33,
    "weight": 16
  },
  {
    "id": "80200",
    "name": "Scaled Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Scaled_Gauntlets.webp",
    "dmgNegation": {
      "physical": 4,
      "strike": 3.4,
      "slash": 4.2,
      "pierce": 4,
      "magic": 3.3,
      "fire": 3.5,
      "lightning": 3.2,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 19,
      "robustness": 28,
      "focus": 13,
      "vitality": 13
    },
    "poise": 7,
    "weight": 5.3
  },
  {
    "id": "80300",
    "name": "Scaled Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Scaled_Greaves.webp",
    "dmgNegation": {
      "physical": 9.2,
      "strike": 8,
      "slash": 9.6,
      "pierce": 9.2,
      "magic": 7.7,
      "fire": 8.1,
      "lightning": 7.4,
      "holy": 7.7
    },
    "resistances": {
      "immunity": 35,
      "robustness": 51,
      "focus": 24,
      "vitality": 24
    },
    "poise": 20,
    "weight": 9.9
  },
  {
    "id": "81100",
    "name": "Scaled Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Scaled_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 15.3,
      "strike": 13.4,
      "slash": 16,
      "pierce": 15.3,
      "magic": 12.8,
      "fire": 13.3,
      "lightning": 12.4,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 45,
      "robustness": 64,
      "focus": 29,
      "vitality": 29
    },
    "poise": 30,
    "weight": 15
  },
  {
    "id": "90000",
    "name": "Perfumer Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Perfumer_Hood.webp",
    "dmgNegation": {
      "physical": 1.4,
      "strike": 2.1,
      "slash": 1.8,
      "pierce": 1.4,
      "magic": 4.6,
      "fire": 4.2,
      "lightning": 4.4,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 26,
      "robustness": 8,
      "focus": 27,
      "vitality": 29
    },
    "poise": 3,
    "weight": 1.7
  },
  {
    "id": "90100",
    "name": "Perfumer Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Perfumer_Robe.webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 6.7,
      "slash": 6.1,
      "pierce": 5.3,
      "magic": 13,
      "fire": 12.4,
      "lightning": 12.6,
      "holy": 13
    },
    "resistances": {
      "immunity": 63,
      "robustness": 21,
      "focus": 71,
      "vitality": 76
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "90200",
    "name": "Perfumer Gloves",
    "category": "Arms",
    "image": "/equipment_images/armours/Perfumer_Gloves.webp",
    "dmgNegation": {
      "physical": 1,
      "strike": 1.5,
      "slash": 1.3,
      "pierce": 1,
      "magic": 3.2,
      "fire": 2.9,
      "lightning": 3.1,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 20,
      "robustness": 6,
      "focus": 21,
      "vitality": 22
    },
    "poise": 2,
    "weight": 1.4
  },
  {
    "id": "90300",
    "name": "Perfumer Sarong",
    "category": "Legs",
    "image": "/equipment_images/armours/Perfumer_Sarong.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 3.4,
      "slash": 3,
      "pierce": 2.3,
      "magic": 7.3,
      "fire": 6.8,
      "lightning": 7.1,
      "holy": 7.3
    },
    "resistances": {
      "immunity": 37,
      "robustness": 11,
      "focus": 39,
      "vitality": 41
    },
    "poise": 4,
    "weight": 2.5
  },
  {
    "id": "91100",
    "name": "Perfumer Robe (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Perfumer_Robe_(Altered).webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 6.1,
      "slash": 5.3,
      "pierce": 4.2,
      "magic": 12.8,
      "fire": 11.9,
      "lightning": 12.4,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 54,
      "robustness": 18,
      "focus": 57,
      "vitality": 67
    },
    "poise": 8,
    "weight": 4.1
  },
  {
    "id": "100000",
    "name": "Traveler's Hat",
    "category": "Head",
    "image": "/equipment_images/armours/Traveler's_Hat.webp",
    "dmgNegation": {
      "physical": 1.8,
      "strike": 1.8,
      "slash": 1.4,
      "pierce": 0.9,
      "magic": 4.6,
      "fire": 4.6,
      "lightning": 4.4,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 23,
      "robustness": 9,
      "focus": 29,
      "vitality": 27
    },
    "poise": 3,
    "weight": 1.7
  },
  {
    "id": "100100",
    "name": "Perfumer's Traveling Garb",
    "category": "Chest",
    "image": "/equipment_images/armours/Perfumer's_Traveling_Garb.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 6.1,
      "slash": 5.3,
      "pierce": 4.2,
      "magic": 13,
      "fire": 13,
      "lightning": 12.6,
      "holy": 13
    },
    "resistances": {
      "immunity": 57,
      "robustness": 23,
      "focus": 76,
      "vitality": 71
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "100200",
    "name": "Traveler's Gloves",
    "category": "Arms",
    "image": "/equipment_images/armours/Traveler's_Gloves.webp",
    "dmgNegation": {
      "physical": 1.3,
      "strike": 1.3,
      "slash": 1,
      "pierce": 0.6,
      "magic": 3.2,
      "fire": 3.2,
      "lightning": 3.1,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 18,
      "robustness": 7,
      "focus": 22,
      "vitality": 21
    },
    "poise": 2,
    "weight": 1.4
  },
  {
    "id": "100300",
    "name": "Traveler's Slops",
    "category": "Legs",
    "image": "/equipment_images/armours/Traveler's_Slops.webp",
    "dmgNegation": {
      "physical": 3,
      "strike": 3,
      "slash": 2.3,
      "pierce": 1.5,
      "magic": 7.3,
      "fire": 7.3,
      "lightning": 7.1,
      "holy": 7.3
    },
    "resistances": {
      "immunity": 34,
      "robustness": 13,
      "focus": 41,
      "vitality": 39
    },
    "poise": 5,
    "weight": 2.5
  },
  {
    "id": "101100",
    "name": "Perfumer's Traveling Garb (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Perfumer's_Traveling_Garb_(Altered).webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 5.3,
      "slash": 4.2,
      "pierce": 2.7,
      "magic": 12.8,
      "fire": 12.8,
      "lightning": 12.4,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 55,
      "robustness": 21,
      "focus": 67,
      "vitality": 63
    },
    "poise": 8,
    "weight": 4.1
  },
  {
    "id": "120000",
    "name": "Alberich's Pointed Hat",
    "category": "Head",
    "image": "/equipment_images/armours/Alberich's_Pointed_Hat.webp",
    "dmgNegation": {
      "physical": 1.8,
      "strike": 1.4,
      "slash": 1.8,
      "pierce": 1.8,
      "magic": 4.6,
      "fire": 4.2,
      "lightning": 4.4,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 16,
      "robustness": 10,
      "focus": 29,
      "vitality": 31
    },
    "poise": 2,
    "effect": "Strengthens thorn sorcery",
    "weight": 1.7
  },
  {
    "id": "120100",
    "name": "Alberich's Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Alberich's_Robe.webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 4.2,
      "slash": 5.3,
      "pierce": 5.3,
      "magic": 12.8,
      "fire": 11.9,
      "lightning": 12.4,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 38,
      "robustness": 23,
      "focus": 67,
      "vitality": 71
    },
    "poise": 7,
    "effect": "Strengthens thorn sorcery",
    "weight": 4.1
  },
  {
    "id": "120200",
    "name": "Alberich's Bracers",
    "category": "Arms",
    "image": "/equipment_images/armours/Alberich's_Bracers.webp",
    "dmgNegation": {
      "physical": 1.3,
      "strike": 1,
      "slash": 1.3,
      "pierce": 1.3,
      "magic": 3.2,
      "fire": 2.9,
      "lightning": 3.1,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 13,
      "robustness": 8,
      "focus": 22,
      "vitality": 24
    },
    "poise": 1,
    "weight": 1.4
  },
  {
    "id": "120300",
    "name": "Alberich's Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Alberich's_Trousers.webp",
    "dmgNegation": {
      "physical": 3,
      "strike": 2.3,
      "slash": 3,
      "pierce": 3,
      "magic": 7.3,
      "fire": 6.8,
      "lightning": 7.2,
      "holy": 7.3
    },
    "resistances": {
      "immunity": 26,
      "robustness": 14,
      "focus": 41,
      "vitality": 44
    },
    "poise": 5,
    "weight": 2.5
  },
  {
    "id": "121000",
    "name": "Alberich's Pointed Hat (Altered)",
    "category": "Head",
    "image": "/equipment_images/armours/Alberich's_Pointed_Hat_(Altered).webp",
    "dmgNegation": {
      "physical": 0.9,
      "strike": 0.2,
      "slash": 0.9,
      "pierce": 0.9,
      "magic": 4.4,
      "fire": 3.8,
      "lightning": 4,
      "holy": 4.4
    },
    "resistances": {
      "immunity": 12,
      "robustness": 7,
      "focus": 23,
      "vitality": 24
    },
    "poise": 1,
    "effect": "Strengthens thorn sorcery",
    "weight": 1
  },
  {
    "id": "121100",
    "name": "Alberich's Robe (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Alberich's_Robe_(Altered).webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 2.7,
      "slash": 4.2,
      "pierce": 4.2,
      "magic": 12.6,
      "fire": 11.4,
      "lightning": 11.9,
      "holy": 12.6
    },
    "resistances": {
      "immunity": 32,
      "robustness": 19,
      "focus": 57,
      "vitality": 61
    },
    "poise": 5,
    "weight": 3.2
  },
  {
    "id": "130000",
    "name": "Spellblade's Pointed Hat",
    "category": "Head",
    "image": "/equipment_images/armours/Spellblade's_Pointed_Hat.webp",
    "dmgNegation": {
      "physical": 1.3,
      "strike": 0.8,
      "slash": 1.3,
      "pierce": 1.3,
      "magic": 4.5,
      "fire": 3.9,
      "lightning": 4.1,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 15,
      "robustness": 8,
      "focus": 25,
      "vitality": 27
    },
    "poise": 2,
    "effect": "Strengthens glintstone sorcery skills",
    "weight": 1.5
  },
  {
    "id": "130100",
    "name": "Spellblade's Traveling Attire",
    "category": "Chest",
    "image": "/equipment_images/armours/Spellblade's_Traveling_Attire.webp",
    "dmgNegation": {
      "physical": 4.1,
      "strike": 2.6,
      "slash": 4.1,
      "pierce": 4.1,
      "magic": 12.7,
      "fire": 11.3,
      "lightning": 11.8,
      "holy": 12.7
    },
    "resistances": {
      "immunity": 35,
      "robustness": 17,
      "focus": 59,
      "vitality": 63
    },
    "poise": 7,
    "effect": "Strengthens glintstone sorcery skills",
    "weight": 3.3
  },
  {
    "id": "130200",
    "name": "Spellblade's Gloves",
    "category": "Arms",
    "image": "/equipment_images/armours/Spellblade's_Gloves.webp",
    "dmgNegation": {
      "physical": 0.9,
      "strike": 0.5,
      "slash": 0.9,
      "pierce": 0.9,
      "magic": 3.1,
      "fire": 2.7,
      "lightning": 2.8,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 11,
      "robustness": 6,
      "focus": 19,
      "vitality": 20
    },
    "poise": 1,
    "weight": 1.2
  },
  {
    "id": "130300",
    "name": "Spellblade's Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Spellblade's_Trousers.webp",
    "dmgNegation": {
      "physical": 2.9,
      "strike": 2.2,
      "slash": 2.9,
      "pierce": 2.9,
      "magic": 7.3,
      "fire": 6.7,
      "lightning": 7,
      "holy": 7.3
    },
    "resistances": {
      "immunity": 25,
      "robustness": 13,
      "focus": 38,
      "vitality": 41
    },
    "poise": 5,
    "weight": 2.6
  },
  {
    "id": "131100",
    "name": "Spellblade's Traveling Attire (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Spellblade's_Traveling_Attire_(Altered).webp",
    "dmgNegation": {
      "physical": 2.6,
      "strike": 0.5,
      "slash": 2.6,
      "pierce": 2.6,
      "magic": 12.6,
      "fire": 10.9,
      "lightning": 11.4,
      "holy": 12.6
    },
    "resistances": {
      "immunity": 32,
      "robustness": 10,
      "focus": 54,
      "vitality": 57
    },
    "poise": 5,
    "effect": "Strengthens glintstone sorcery skills",
    "weight": 2.5
  },
  {
    "id": "140000",
    "name": "Bull-Goat Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Bull-Goat_Helm.webp",
    "dmgNegation": {
      "physical": 7.5,
      "strike": 7.4,
      "slash": 6.7,
      "pierce": 6.7,
      "magic": 4.7,
      "fire": 4.8,
      "lightning": 5.3,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 31,
      "robustness": 35,
      "focus": 20,
      "vitality": 23
    },
    "poise": 15,
    "weight": 11.3
  },
  {
    "id": "140100",
    "name": "Bull-Goat Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Bull-Goat_Armor.webp",
    "dmgNegation": {
      "physical": 20.4,
      "strike": 20.2,
      "slash": 18.3,
      "pierce": 18.3,
      "magic": 13.3,
      "fire": 13.5,
      "lightning": 14.9,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 71,
      "robustness": 83,
      "focus": 46,
      "vitality": 55
    },
    "poise": 47,
    "weight": 26.5
  },
  {
    "id": "140200",
    "name": "Bull-Goat Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Bull-Goat_Gauntlets.webp",
    "dmgNegation": {
      "physical": 5.2,
      "strike": 5.2,
      "slash": 4.6,
      "pierce": 4.6,
      "magic": 3.3,
      "fire": 3.3,
      "lightning": 3.7,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 24,
      "robustness": 28,
      "focus": 15,
      "vitality": 18
    },
    "poise": 10,
    "weight": 8.8
  },
  {
    "id": "140300",
    "name": "Bull-Goat Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Bull-Goat_Greaves.webp",
    "dmgNegation": {
      "physical": 11.9,
      "strike": 11.8,
      "slash": 10.6,
      "pierce": 10.6,
      "magic": 7.6,
      "fire": 7.7,
      "lightning": 8.5,
      "holy": 7.3
    },
    "resistances": {
      "immunity": 44,
      "robustness": 51,
      "focus": 29,
      "vitality": 34
    },
    "poise": 28,
    "weight": 16.4
  },
  {
    "id": "150000",
    "name": "Iron Kasa",
    "category": "Head",
    "image": "/equipment_images/armours/Iron_Kasa.webp",
    "dmgNegation": {
      "physical": 3.6,
      "strike": 3.6,
      "slash": 4.2,
      "pierce": 3.6,
      "magic": 4,
      "fire": 4.2,
      "lightning": 4.4,
      "holy": 4
    },
    "resistances": {
      "immunity": 30,
      "robustness": 23,
      "focus": 24,
      "vitality": 24
    },
    "poise": 6,
    "weight": 3.8
  },
  {
    "id": "150100",
    "name": "Ronin's Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Ronin's_Armor.webp",
    "dmgNegation": {
      "physical": 10.5,
      "strike": 10.5,
      "slash": 11.2,
      "pierce": 10.5,
      "magic": 11.9,
      "fire": 12.4,
      "lightning": 13.4,
      "holy": 11.9
    },
    "resistances": {
      "immunity": 66,
      "robustness": 48,
      "focus": 52,
      "vitality": 57
    },
    "poise": 16,
    "weight": 8.5
  },
  {
    "id": "150200",
    "name": "Ronin's Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Ronin's_Gauntlets.webp",
    "dmgNegation": {
      "physical": 2.7,
      "strike": 2.7,
      "slash": 2.8,
      "pierce": 2.7,
      "magic": 2.9,
      "fire": 3.1,
      "lightning": 3.2,
      "holy": 2.9
    },
    "resistances": {
      "immunity": 25,
      "robustness": 19,
      "focus": 20,
      "vitality": 21
    },
    "poise": 4,
    "weight": 3.1
  },
  {
    "id": "150300",
    "name": "Ronin's Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Ronin's_Greaves.webp",
    "dmgNegation": {
      "physical": 6.2,
      "strike": 6.2,
      "slash": 6.5,
      "pierce": 6.2,
      "magic": 6.8,
      "fire": 7.1,
      "lightning": 7.3,
      "holy": 6.8
    },
    "resistances": {
      "immunity": 46,
      "robustness": 35,
      "focus": 36,
      "vitality": 38
    },
    "poise": 11,
    "weight": 5.7
  },
  {
    "id": "151100",
    "name": "Ronin's Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Ronin's_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 8.8,
      "strike": 8.8,
      "slash": 9.5,
      "pierce": 8.8,
      "magic": 10.2,
      "fire": 10.9,
      "lightning": 11.9,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 54,
      "robustness": 38,
      "focus": 42,
      "vitality": 45
    },
    "poise": 15,
    "weight": 7.6
  },
  {
    "id": "160000",
    "name": "Guilty Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Guilty_Hood.webp",
    "dmgNegation": {
      "physical": 0.9,
      "strike": 1.4,
      "slash": 1.8,
      "pierce": 0.2,
      "magic": 4.4,
      "fire": 4,
      "lightning": 4.5,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 15,
      "robustness": 9,
      "focus": 27,
      "vitality": 31
    },
    "poise": 2,
    "weight": 1.4
  },
  {
    "id": "160100",
    "name": "Cloth Garb",
    "category": "Chest",
    "image": "/equipment_images/armours/Cloth_Garb.webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 4.2,
      "slash": 2.7,
      "pierce": 4.2,
      "magic": 12.8,
      "fire": 12.4,
      "lightning": 11.9,
      "holy": 12.4
    },
    "resistances": {
      "immunity": 42,
      "robustness": 23,
      "focus": 60,
      "vitality": 60
    },
    "poise": 5,
    "weight": 3.2
  },
  {
    "id": "160300",
    "name": "Cloth Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Cloth_Trousers.webp",
    "dmgNegation": {
      "physical": 3,
      "strike": 2.3,
      "slash": 1.5,
      "pierce": 2.3,
      "magic": 7.3,
      "fire": 7.1,
      "lightning": 6.8,
      "holy": 7.1
    },
    "resistances": {
      "immunity": 26,
      "robustness": 14,
      "focus": 37,
      "vitality": 37
    },
    "poise": 3,
    "weight": 2
  },
  {
    "id": "170000",
    "name": "Black Wolf Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Black_Wolf_Mask.webp",
    "dmgNegation": {
      "physical": 5.2,
      "strike": 4.6,
      "slash": 5.2,
      "pierce": 5.5,
      "magic": 4,
      "fire": 4.5,
      "lightning": 3.6,
      "holy": 4.2
    },
    "resistances": {
      "immunity": 16,
      "robustness": 33,
      "focus": 11,
      "vitality": 11
    },
    "poise": 9,
    "weight": 5.9
  },
  {
    "id": "170100",
    "name": "Blaidd's Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Blaidd's_Armor.webp",
    "dmgNegation": {
      "physical": 14.6,
      "strike": 12.9,
      "slash": 14.6,
      "pierce": 15.3,
      "magic": 11.4,
      "fire": 12.6,
      "lightning": 10.2,
      "holy": 11.9
    },
    "resistances": {
      "immunity": 38,
      "robustness": 76,
      "focus": 25,
      "vitality": 25
    },
    "poise": 28,
    "weight": 13.7
  },
  {
    "id": "170200",
    "name": "Blaidd's Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Blaidd's_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.6,
      "strike": 3.2,
      "slash": 3.6,
      "pierce": 3.8,
      "magic": 2.8,
      "fire": 3.2,
      "lightning": 2.7,
      "holy": 2.9
    },
    "resistances": {
      "immunity": 13,
      "robustness": 21,
      "focus": 8,
      "vitality": 8
    },
    "poise": 6,
    "weight": 4.6
  },
  {
    "id": "170300",
    "name": "Blaidd's Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Blaidd's_Greaves.webp",
    "dmgNegation": {
      "physical": 8.4,
      "strike": 7.3,
      "slash": 8.4,
      "pierce": 8.8,
      "magic": 6.5,
      "fire": 7.3,
      "lightning": 6.2,
      "holy": 6.8
    },
    "resistances": {
      "immunity": 24,
      "robustness": 39,
      "focus": 16,
      "vitality": 16
    },
    "poise": 17,
    "weight": 8.5
  },
  {
    "id": "171100",
    "name": "Blaidd's Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Blaidd's_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 14,
      "strike": 12.4,
      "slash": 14,
      "pierce": 14.6,
      "magic": 10.9,
      "fire": 12.4,
      "lightning": 9.5,
      "holy": 11.4
    },
    "resistances": {
      "immunity": 32,
      "robustness": 57,
      "focus": 22,
      "vitality": 21
    },
    "poise": 27,
    "weight": 12.5
  },
  {
    "id": "180000",
    "name": "Black Knife Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Black_Knife_Hood.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 3.6,
      "slash": 4.2,
      "pierce": 4.2,
      "magic": 2.8,
      "fire": 3.1,
      "lightning": 2.1,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 11,
      "robustness": 18,
      "focus": 9,
      "vitality": 9
    },
    "poise": 6,
    "weight": 3.8
  },
  {
    "id": "180100",
    "name": "Black Knife Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Black_Knife_Armor.webp",
    "dmgNegation": {
      "physical": 11.4,
      "strike": 10.9,
      "slash": 12.4,
      "pierce": 12.4,
      "magic": 8.8,
      "fire": 9.5,
      "lightning": 6.7,
      "holy": 11.4
    },
    "resistances": {
      "immunity": 28,
      "robustness": 46,
      "focus": 23,
      "vitality": 23
    },
    "poise": 19,
    "effect": "Traces of power yet remain in its concealing veil, which muffles the sound of footsteps",
    "weight": 9.2
  },
  {
    "id": "180200",
    "name": "Black Knife Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Black_Knife_Gauntlets.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 2.7,
      "slash": 3.1,
      "pierce": 3.1,
      "magic": 2.1,
      "fire": 2.3,
      "lightning": 1.6,
      "holy": 2.8
    },
    "resistances": {
      "immunity": 9,
      "robustness": 15,
      "focus": 8,
      "vitality": 8
    },
    "poise": 4,
    "weight": 3.1
  },
  {
    "id": "180300",
    "name": "Black Knife Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Black_Knife_Greaves.webp",
    "dmgNegation": {
      "physical": 6.5,
      "strike": 6.2,
      "slash": 7.1,
      "pierce": 7.1,
      "magic": 5,
      "fire": 5.4,
      "lightning": 3.8,
      "holy": 6.5
    },
    "resistances": {
      "immunity": 17,
      "robustness": 29,
      "focus": 14,
      "vitality": 14
    },
    "poise": 11,
    "weight": 5.7
  },
  {
    "id": "181100",
    "name": "Black Knife Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Black_Knife_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 11.3,
      "strike": 10.8,
      "slash": 12.3,
      "pierce": 12.3,
      "magic": 8.7,
      "fire": 9.4,
      "lightning": 6.6,
      "holy": 11.3
    },
    "resistances": {
      "immunity": 25,
      "robustness": 42,
      "focus": 21,
      "vitality": 21
    },
    "poise": 19,
    "weight": 9
  },
  {
    "id": "190000",
    "name": "Exile Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Exile_Hood.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.4,
      "slash": 4.6,
      "pierce": 4.4,
      "magic": 2.8,
      "fire": 3.8,
      "lightning": 2.3,
      "holy": 3.4
    },
    "resistances": {
      "immunity": 12,
      "robustness": 23,
      "focus": 9,
      "vitality": 8
    },
    "poise": 6,
    "weight": 4
  },
  {
    "id": "190100",
    "name": "Exile Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Exile_Armor.webp",
    "dmgNegation": {
      "physical": 12.4,
      "strike": 9.5,
      "slash": 12.9,
      "pierce": 12.4,
      "magic": 8,
      "fire": 10.9,
      "lightning": 6.7,
      "holy": 9.5
    },
    "resistances": {
      "immunity": 28,
      "robustness": 55,
      "focus": 21,
      "vitality": 18
    },
    "poise": 19,
    "weight": 9.2
  },
  {
    "id": "190200",
    "name": "Exile Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Exile_Gauntlets.webp",
    "dmgNegation": {
      "physical": 2.9,
      "strike": 2.1,
      "slash": 3.1,
      "pierce": 2.9,
      "magic": 1.7,
      "fire": 2.5,
      "lightning": 1.5,
      "holy": 2.1
    },
    "resistances": {
      "immunity": 8,
      "robustness": 17,
      "focus": 6,
      "vitality": 4
    },
    "poise": 4,
    "weight": 2.9
  },
  {
    "id": "190300",
    "name": "Exile Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Exile_Greaves.webp",
    "dmgNegation": {
      "physical": 7.1,
      "strike": 5.4,
      "slash": 7.4,
      "pierce": 7.1,
      "magic": 4.5,
      "fire": 6.2,
      "lightning": 3.8,
      "holy": 5.4
    },
    "resistances": {
      "immunity": 17,
      "robustness": 34,
      "focus": 13,
      "vitality": 11
    },
    "poise": 11,
    "weight": 5.7
  },
  {
    "id": "200000",
    "name": "Banished Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Banished_Knight_Helm.webp",
    "dmgNegation": {
      "physical": 6.8,
      "strike": 5.4,
      "slash": 7,
      "pierce": 6.3,
      "magic": 4.8,
      "fire": 4.8,
      "lightning": 4.6,
      "holy": 4.7
    },
    "resistances": {
      "immunity": 26,
      "robustness": 35,
      "focus": 16,
      "vitality": 18
    },
    "poise": 11,
    "weight": 7.5
  },
  {
    "id": "200100",
    "name": "Banished Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Banished_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 18.7,
      "strike": 15,
      "slash": 19.2,
      "pierce": 17.5,
      "magic": 13.5,
      "fire": 13.5,
      "lightning": 13,
      "holy": 13.3
    },
    "resistances": {
      "immunity": 60,
      "robustness": 83,
      "focus": 38,
      "vitality": 42
    },
    "poise": 34,
    "weight": 17.5
  },
  {
    "id": "200200",
    "name": "Banished Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Banished_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 4.7,
      "strike": 3.7,
      "slash": 4.9,
      "pierce": 4.4,
      "magic": 3.3,
      "fire": 3.3,
      "lightning": 3.2,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 20,
      "robustness": 28,
      "focus": 13,
      "vitality": 14
    },
    "poise": 7,
    "weight": 5.8
  },
  {
    "id": "200300",
    "name": "Banished Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Banished_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 10.8,
      "strike": 8.6,
      "slash": 11.1,
      "pierce": 10.1,
      "magic": 7.7,
      "fire": 7.7,
      "lightning": 7.4,
      "holy": 7.6
    },
    "resistances": {
      "immunity": 37,
      "robustness": 51,
      "focus": 24,
      "vitality": 26
    },
    "poise": 20,
    "weight": 10.8
  },
  {
    "id": "201000",
    "name": "Banished Knight Helm (Altered)",
    "category": "Head",
    "image": "/equipment_images/armours/Banished_Knight_Helm_(Altered).webp",
    "dmgNegation": {
      "physical": 6.7,
      "strike": 5.2,
      "slash": 6.8,
      "pierce": 6.1,
      "magic": 4.7,
      "fire": 4.7,
      "lightning": 4.6,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 21,
      "robustness": 30,
      "focus": 13,
      "vitality": 14
    },
    "poise": 11,
    "weight": 7.1
  },
  {
    "id": "201100",
    "name": "Banished Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Banished_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 18.3,
      "strike": 14.4,
      "slash": 18.7,
      "pierce": 16.8,
      "magic": 13.3,
      "fire": 13.3,
      "lightning": 12.8,
      "holy": 13
    },
    "resistances": {
      "immunity": 52,
      "robustness": 69,
      "focus": 32,
      "vitality": 34
    },
    "poise": 33,
    "weight": 16.5
  },
  {
    "id": "210000",
    "name": "Briar Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Briar_Helm.webp",
    "dmgNegation": {
      "physical": 4.6,
      "strike": 4,
      "slash": 4.8,
      "pierce": 4.4,
      "magic": 3.8,
      "fire": 4.4,
      "lightning": 3.1,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 15,
      "robustness": 31,
      "focus": 10,
      "vitality": 10
    },
    "poise": 9,
    "effect": "They also cause this armor to deal damage when performing dodge rolls",
    "weight": 5.1
  },
  {
    "id": "210100",
    "name": "Briar Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Briar_Armor.webp",
    "dmgNegation": {
      "physical": 12.9,
      "strike": 11.4,
      "slash": 13.5,
      "pierce": 12.4,
      "magic": 10.9,
      "fire": 12.4,
      "lightning": 8.8,
      "holy": 10.9
    },
    "resistances": {
      "immunity": 35,
      "robustness": 71,
      "focus": 24,
      "vitality": 24
    },
    "poise": 21,
    "effect": "They also cause this armor to deal damage when performing dodge rolls",
    "weight": 11.8
  },
  {
    "id": "210200",
    "name": "Briar Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Briar_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.2,
      "strike": 2.8,
      "slash": 3.3,
      "pierce": 3.1,
      "magic": 2.7,
      "fire": 3.1,
      "lightning": 2.1,
      "holy": 2.7
    },
    "resistances": {
      "immunity": 12,
      "robustness": 24,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "effect": "They also cause this armor to deal damage when performing dodge rolls",
    "weight": 3.9
  },
  {
    "id": "210300",
    "name": "Briar Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Briar_Greaves.webp",
    "dmgNegation": {
      "physical": 7.4,
      "strike": 6.5,
      "slash": 7.7,
      "pierce": 7.1,
      "magic": 6.2,
      "fire": 7.1,
      "lightning": 5,
      "holy": 6.2
    },
    "resistances": {
      "immunity": 22,
      "robustness": 44,
      "focus": 15,
      "vitality": 15
    },
    "poise": 12,
    "effect": "They also cause this armor to deal damage when performing dodge rolls",
    "weight": 7.3
  },
  {
    "id": "211100",
    "name": "Briar Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Briar_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 12.4,
      "strike": 10.9,
      "slash": 12.4,
      "pierce": 11.9,
      "magic": 10.2,
      "fire": 11.4,
      "lightning": 7.1,
      "holy": 9.5
    },
    "resistances": {
      "immunity": 29,
      "robustness": 61,
      "focus": 21,
      "vitality": 21
    },
    "poise": 19,
    "effect": "They also cause this armor to deal damage when performing dodge rolls",
    "weight": 10.7
  },
  {
    "id": "220000",
    "name": "Page Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Page_Hood.webp",
    "dmgNegation": {
      "physical": 1.8,
      "strike": 1.4,
      "slash": 0.9,
      "pierce": 0.9,
      "magic": 4.4,
      "fire": 4.2,
      "lightning": 4.5,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 15,
      "robustness": 8,
      "focus": 29,
      "vitality": 29
    },
    "poise": 2,
    "weight": 1.4
  },
  {
    "id": "220100",
    "name": "Page Garb",
    "category": "Chest",
    "image": "/equipment_images/armours/Page_Garb.webp",
    "dmgNegation": {
      "physical": 6.7,
      "strike": 6.1,
      "slash": 5.3,
      "pierce": 5.3,
      "magic": 12.8,
      "fire": 12.6,
      "lightning": 13,
      "holy": 13
    },
    "resistances": {
      "immunity": 42,
      "robustness": 23,
      "focus": 83,
      "vitality": 83
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "220300",
    "name": "Page Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Page_Trousers.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3,
      "slash": 2.3,
      "pierce": 2.3,
      "magic": 7.2,
      "fire": 7.1,
      "lightning": 7.3,
      "holy": 7.3
    },
    "resistances": {
      "immunity": 24,
      "robustness": 13,
      "focus": 44,
      "vitality": 44
    },
    "poise": 5,
    "weight": 2.5
  },
  {
    "id": "221100",
    "name": "Page Garb (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Page_Garb_(Altered).webp",
    "dmgNegation": {
      "physical": 6.3,
      "strike": 5.5,
      "slash": 4.4,
      "pierce": 4.4,
      "magic": 12.8,
      "fire": 12.6,
      "lightning": 13,
      "holy": 13
    },
    "resistances": {
      "immunity": 34,
      "robustness": 19,
      "focus": 64,
      "vitality": 64
    },
    "poise": 8,
    "weight": 4.5
  },
  {
    "id": "230000",
    "name": "Night's Cavalry Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Night's_Cavalry_Helm.webp",
    "dmgNegation": {
      "physical": 5,
      "strike": 4.6,
      "slash": 5,
      "pierce": 4.8,
      "magic": 3.8,
      "fire": 4.5,
      "lightning": 3.8,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 16,
      "robustness": 24,
      "focus": 10,
      "vitality": 10
    },
    "poise": 8,
    "weight": 5.5
  },
  {
    "id": "230100",
    "name": "Night's Cavalry Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Night's_Cavalry_Armor.webp",
    "dmgNegation": {
      "physical": 14,
      "strike": 12.9,
      "slash": 14,
      "pierce": 13.5,
      "magic": 10.9,
      "fire": 12.6,
      "lightning": 10.9,
      "holy": 12.6
    },
    "resistances": {
      "immunity": 38,
      "robustness": 57,
      "focus": 24,
      "vitality": 24
    },
    "poise": 25,
    "weight": 12.8
  },
  {
    "id": "230200",
    "name": "Night's Cavalry Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Night's_Cavalry_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.5,
      "strike": 3.2,
      "slash": 3.5,
      "pierce": 3.3,
      "magic": 2.7,
      "fire": 3.1,
      "lightning": 2.7,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 13,
      "robustness": 19,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 4.3
  },
  {
    "id": "230300",
    "name": "Night's Cavalry Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Night's_Cavalry_Greaves.webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 7.3,
      "slash": 8,
      "pierce": 7.7,
      "magic": 6.2,
      "fire": 7.2,
      "lightning": 6.2,
      "holy": 7.2
    },
    "resistances": {
      "immunity": 24,
      "robustness": 35,
      "focus": 15,
      "vitality": 15
    },
    "poise": 15,
    "weight": 7.9
  },
  {
    "id": "231000",
    "name": "Night's Cavalry Helm (Altered)",
    "category": "Head",
    "image": "/equipment_images/armours/Night's_Cavalry_Helm_(Altered).webp",
    "dmgNegation": {
      "physical": 4.8,
      "strike": 4.4,
      "slash": 4.8,
      "pierce": 4.4,
      "magic": 3.6,
      "fire": 4.4,
      "lightning": 3.6,
      "holy": 4.4
    },
    "resistances": {
      "immunity": 13,
      "robustness": 21,
      "focus": 9,
      "vitality": 9
    },
    "poise": 8,
    "weight": 5.1
  },
  {
    "id": "231100",
    "name": "Night's Cavalry Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Night's_Cavalry_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 12.4,
      "slash": 13.5,
      "pierce": 12.4,
      "magic": 10.2,
      "fire": 12.4,
      "lightning": 10.2,
      "holy": 12.4
    },
    "resistances": {
      "immunity": 32,
      "robustness": 50,
      "focus": 21,
      "vitality": 21
    },
    "poise": 24,
    "weight": 11.8
  },
  {
    "id": "240000",
    "name": "Blue Silver Mail Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Blue_Silver_Mail_Hood.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 3.1,
      "slash": 4.4,
      "pierce": 3.8,
      "magic": 3.6,
      "fire": 3.4,
      "lightning": 2.5,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 10,
      "robustness": 24,
      "focus": 5,
      "vitality": 5
    },
    "poise": 6,
    "weight": 3.8
  },
  {
    "id": "240100",
    "name": "Blue Silver Mail Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Blue_Silver_Mail_Armor.webp",
    "dmgNegation": {
      "physical": 12.4,
      "strike": 9.5,
      "slash": 12.9,
      "pierce": 11.4,
      "magic": 10.9,
      "fire": 10.2,
      "lightning": 8,
      "holy": 8
    },
    "resistances": {
      "immunity": 25,
      "robustness": 60,
      "focus": 18,
      "vitality": 18
    },
    "poise": 19,
    "weight": 9.2
  },
  {
    "id": "240200",
    "name": "Blue Silver Bracelets",
    "category": "Arms",
    "image": "/equipment_images/armours/Blue_Silver_Bracelets.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 1.5,
      "slash": 2.5,
      "pierce": 1.9,
      "magic": 1.9,
      "fire": 1.6,
      "lightning": 1,
      "holy": 1
    },
    "resistances": {
      "immunity": 4,
      "robustness": 14,
      "focus": 4,
      "vitality": 4
    },
    "poise": 3,
    "weight": 2.1
  },
  {
    "id": "240300",
    "name": "Blue Silver Mail Skirt",
    "category": "Legs",
    "image": "/equipment_images/armours/Blue_Silver_Mail_Skirt.webp",
    "dmgNegation": {
      "physical": 6.8,
      "strike": 5,
      "slash": 7.1,
      "pierce": 6.2,
      "magic": 5.8,
      "fire": 5.4,
      "lightning": 4,
      "holy": 4
    },
    "resistances": {
      "immunity": 15,
      "robustness": 35,
      "focus": 7,
      "vitality": 7
    },
    "poise": 10,
    "weight": 5.5
  },
  {
    "id": "241100",
    "name": "Blue Silver Mail Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Blue_Silver_Mail_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 12.1,
      "strike": 9,
      "slash": 12.6,
      "pierce": 11.1,
      "magic": 10.4,
      "fire": 9.7,
      "lightning": 7.3,
      "holy": 7.3
    },
    "resistances": {
      "immunity": 21,
      "robustness": 52,
      "focus": 10,
      "vitality": 10
    },
    "poise": 17,
    "weight": 8.5
  },
  {
    "id": "250000",
    "name": "Nomadic Merchant's Chapeau",
    "category": "Head",
    "image": "/equipment_images/armours/Nomadic_Merchant's_Chapeau.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 3.1,
      "slash": 2.5,
      "pierce": 2.3,
      "magic": 3.4,
      "fire": 3.4,
      "lightning": 3.4,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 24,
      "robustness": 14,
      "focus": 31,
      "vitality": 20
    },
    "poise": 4,
    "weight": 3
  },
  {
    "id": "250100",
    "name": "Nomadic Merchant's Finery",
    "category": "Chest",
    "image": "/equipment_images/armours/Nomadic_Merchant's_Finery.webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 8.8,
      "slash": 7.1,
      "pierce": 6.7,
      "magic": 9.5,
      "fire": 9.5,
      "lightning": 9.5,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 57,
      "robustness": 32,
      "focus": 71,
      "vitality": 46
    },
    "poise": 13,
    "weight": 7.2
  },
  {
    "id": "250300",
    "name": "Nomadic Merchant's Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Nomadic_Merchant's_Trousers.webp",
    "dmgNegation": {
      "physical": 4.5,
      "strike": 5,
      "slash": 4,
      "pierce": 3.8,
      "magic": 5.4,
      "fire": 5.4,
      "lightning": 5.4,
      "holy": 5
    },
    "resistances": {
      "immunity": 35,
      "robustness": 20,
      "focus": 44,
      "vitality": 29
    },
    "poise": 8,
    "weight": 4.4
  },
  {
    "id": "251100",
    "name": "Nomadic Merchant's Finery (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Nomadic_Merchant's_Finery_(Altered).webp",
    "dmgNegation": {
      "physical": 7,
      "strike": 7.9,
      "slash": 6.6,
      "pierce": 6,
      "magic": 8.7,
      "fire": 8.7,
      "lightning": 8.7,
      "holy": 7.9
    },
    "resistances": {
      "immunity": 50,
      "robustness": 25,
      "focus": 61,
      "vitality": 38
    },
    "poise": 12,
    "weight": 6.1
  },
  {
    "id": "260000",
    "name": "Malformed Dragon Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Malformed_Dragon_Helm.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 5.4,
      "slash": 6.3,
      "pierce": 6.1,
      "magic": 4.6,
      "fire": 4.6,
      "lightning": 4.9,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 24,
      "robustness": 33,
      "focus": 16,
      "vitality": 16
    },
    "poise": 10,
    "weight": 6.8
  },
  {
    "id": "260100",
    "name": "Malformed Dragon Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Malformed_Dragon_Armor.webp",
    "dmgNegation": {
      "physical": 16.8,
      "strike": 15,
      "slash": 17.5,
      "pierce": 16.8,
      "magic": 13,
      "fire": 13,
      "lightning": 13.8,
      "holy": 13
    },
    "resistances": {
      "immunity": 57,
      "robustness": 76,
      "focus": 38,
      "vitality": 38
    },
    "poise": 31,
    "weight": 16
  },
  {
    "id": "260200",
    "name": "Malformed Dragon Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Malformed_Dragon_Gauntlets.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 3.7,
      "slash": 4.4,
      "pierce": 4.2,
      "magic": 3.2,
      "fire": 3.2,
      "lightning": 3.4,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 19,
      "robustness": 25,
      "focus": 13,
      "vitality": 13
    },
    "poise": 7,
    "weight": 5.3
  },
  {
    "id": "260300",
    "name": "Malformed Dragon Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Malformed_Dragon_Greaves.webp",
    "dmgNegation": {
      "physical": 9.6,
      "strike": 8.6,
      "slash": 10.1,
      "pierce": 9.6,
      "magic": 7.4,
      "fire": 7.4,
      "lightning": 7.9,
      "holy": 7.4
    },
    "resistances": {
      "immunity": 35,
      "robustness": 47,
      "focus": 24,
      "vitality": 24
    },
    "poise": 19,
    "weight": 9.9
  },
  {
    "id": "270000",
    "name": "Tree Sentinel Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Tree_Sentinel_Helm.webp",
    "dmgNegation": {
      "physical": 6.8,
      "strike": 5.4,
      "slash": 6.8,
      "pierce": 6.3,
      "magic": 4.6,
      "fire": 6.2,
      "lightning": 4.5,
      "holy": 5
    },
    "resistances": {
      "immunity": 29,
      "robustness": 39,
      "focus": 18,
      "vitality": 20
    },
    "poise": 12,
    "weight": 8.1
  },
  {
    "id": "270100",
    "name": "Tree Sentinel Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Tree_Sentinel_Armor.webp",
    "dmgNegation": {
      "physical": 18.7,
      "strike": 15,
      "slash": 18.7,
      "pierce": 17.5,
      "magic": 13,
      "fire": 17.1,
      "lightning": 12.6,
      "holy": 14.1
    },
    "resistances": {
      "immunity": 67,
      "robustness": 90,
      "focus": 42,
      "vitality": 46
    },
    "poise": 39,
    "weight": 18.9
  },
  {
    "id": "270200",
    "name": "Tree Sentinel Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Tree_Sentinel_Gauntlets.webp",
    "dmgNegation": {
      "physical": 4.7,
      "strike": 3.7,
      "slash": 4.7,
      "pierce": 4.4,
      "magic": 3.2,
      "fire": 4.3,
      "lightning": 3.1,
      "holy": 3.5
    },
    "resistances": {
      "immunity": 22,
      "robustness": 30,
      "focus": 14,
      "vitality": 15
    },
    "poise": 8,
    "weight": 6.3
  },
  {
    "id": "270300",
    "name": "Tree Sentinel Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Tree_Sentinel_Greaves.webp",
    "dmgNegation": {
      "physical": 10.8,
      "strike": 8.6,
      "slash": 10.8,
      "pierce": 10.1,
      "magic": 7.4,
      "fire": 9.9,
      "lightning": 7.2,
      "holy": 8.1
    },
    "resistances": {
      "immunity": 41,
      "robustness": 56,
      "focus": 26,
      "vitality": 29
    },
    "poise": 23,
    "weight": 11.7
  },
  {
    "id": "271100",
    "name": "Tree Sentinel Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Tree_Sentinel_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 18.5,
      "strike": 14.8,
      "slash": 18.5,
      "pierce": 17.3,
      "magic": 12.6,
      "fire": 16.4,
      "lightning": 12.4,
      "holy": 14
    },
    "resistances": {
      "immunity": 57,
      "robustness": 75,
      "focus": 34,
      "vitality": 38
    },
    "poise": 35,
    "weight": 18.1
  },
  {
    "id": "280000",
    "name": "Royal Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Royal_Knight_Helm.webp",
    "dmgNegation": {
      "physical": 5.8,
      "strike": 5.2,
      "slash": 6.3,
      "pierce": 6.1,
      "magic": 5,
      "fire": 4.7,
      "lightning": 4.4,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 22,
      "robustness": 29,
      "focus": 15,
      "vitality": 15
    },
    "poise": 9,
    "weight": 6.6
  },
  {
    "id": "280100",
    "name": "Royal Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Royal_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 16,
      "strike": 14.4,
      "slash": 17.5,
      "pierce": 16.8,
      "magic": 14.1,
      "fire": 13.3,
      "lightning": 12.4,
      "holy": 13
    },
    "resistances": {
      "immunity": 50,
      "robustness": 67,
      "focus": 35,
      "vitality": 35
    },
    "poise": 24,
    "weight": 15.5
  },
  {
    "id": "280200",
    "name": "Royal Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Royal_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 4,
      "strike": 3.6,
      "slash": 4.4,
      "pierce": 4.2,
      "magic": 3.5,
      "fire": 3.3,
      "lightning": 3.1,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 17,
      "robustness": 22,
      "focus": 12,
      "vitality": 12
    },
    "poise": 6,
    "weight": 5.2
  },
  {
    "id": "280300",
    "name": "Royal Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Royal_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 9.2,
      "strike": 8.3,
      "slash": 10.1,
      "pierce": 9.6,
      "magic": 8.1,
      "fire": 7.6,
      "lightning": 7.1,
      "holy": 7.4
    },
    "resistances": {
      "immunity": 31,
      "robustness": 41,
      "focus": 22,
      "vitality": 22
    },
    "poise": 14,
    "weight": 9.6
  },
  {
    "id": "281100",
    "name": "Royal Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Royal_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 15.8,
      "strike": 14.2,
      "slash": 17.3,
      "pierce": 16.6,
      "magic": 13.9,
      "fire": 13.1,
      "lightning": 12.2,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 45,
      "robustness": 61,
      "focus": 32,
      "vitality": 32
    },
    "poise": 28,
    "weight": 15
  },
  {
    "id": "290000",
    "name": "Nox Monk Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Nox_Monk_Hood.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 3.1,
      "slash": 2.8,
      "pierce": 2.5,
      "magic": 4,
      "fire": 3.8,
      "lightning": 3.8,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 24,
      "robustness": 15,
      "focus": 18,
      "vitality": 18
    },
    "poise": 4,
    "weight": 3
  },
  {
    "id": "290100",
    "name": "Nox Monk Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Nox_Monk_Armor.webp",
    "dmgNegation": {
      "physical": 9.3,
      "strike": 10,
      "slash": 9.3,
      "pierce": 8.6,
      "magic": 12.2,
      "fire": 11.7,
      "lightning": 11.7,
      "holy": 10
    },
    "resistances": {
      "immunity": 63,
      "robustness": 42,
      "focus": 50,
      "vitality": 50
    },
    "poise": 16,
    "weight": 8.1
  },
  {
    "id": "290200",
    "name": "Nox Bracelets",
    "category": "Arms",
    "image": "/equipment_images/armours/Nox_Bracelets.webp",
    "dmgNegation": {
      "physical": 2.1,
      "strike": 2.3,
      "slash": 2.1,
      "pierce": 1.9,
      "magic": 2.9,
      "fire": 2.8,
      "lightning": 2.8,
      "holy": 2.3
    },
    "resistances": {
      "immunity": 20,
      "robustness": 13,
      "focus": 15,
      "vitality": 15
    },
    "poise": 3,
    "weight": 2.6
  },
  {
    "id": "290300",
    "name": "Nox Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Nox_Greaves.webp",
    "dmgNegation": {
      "physical": 5.4,
      "strike": 5.8,
      "slash": 5.4,
      "pierce": 5,
      "magic": 7.1,
      "fire": 6.8,
      "lightning": 6.8,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 39,
      "robustness": 26,
      "focus": 31,
      "vitality": 31
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "291000",
    "name": "Nox Monk Hood (Altered)",
    "category": "Head",
    "image": "/equipment_images/armours/Nox_Monk_Hood_(Altered).webp",
    "dmgNegation": {
      "physical": 2.5,
      "strike": 2.8,
      "slash": 2.5,
      "pierce": 2.3,
      "magic": 3.8,
      "fire": 3.6,
      "lightning": 3.6,
      "holy": 2.8
    },
    "resistances": {
      "immunity": 21,
      "robustness": 12,
      "focus": 14,
      "vitality": 14
    },
    "poise": 3,
    "weight": 2.7
  },
  {
    "id": "291100",
    "name": "Nox Monk Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Nox_Monk_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 8.6,
      "strike": 9.3,
      "slash": 8.6,
      "pierce": 7.8,
      "magic": 11.7,
      "fire": 11.2,
      "lightning": 11.2,
      "holy": 9.3
    },
    "resistances": {
      "immunity": 54,
      "robustness": 34,
      "focus": 42,
      "vitality": 42
    },
    "poise": 15,
    "weight": 7.4
  },
  {
    "id": "292000",
    "name": "Nox Swordstress Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Nox_Swordstress_Crown.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 3.4,
      "slash": 2.8,
      "pierce": 3.1,
      "magic": 4.4,
      "fire": 3.6,
      "lightning": 4.2,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 24,
      "robustness": 15,
      "focus": 22,
      "vitality": 22
    },
    "poise": 5,
    "weight": 3.3
  },
  {
    "id": "292100",
    "name": "Nox Swordstress Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Nox_Swordstress_Armor.webp",
    "dmgNegation": {
      "physical": 8.8,
      "strike": 10.2,
      "slash": 8.8,
      "pierce": 9.5,
      "magic": 12.6,
      "fire": 10.9,
      "lightning": 12.4,
      "holy": 11.4
    },
    "resistances": {
      "immunity": 60,
      "robustness": 38,
      "focus": 55,
      "vitality": 55
    },
    "poise": 17,
    "weight": 8.3
  },
  {
    "id": "293000",
    "name": "Night Maiden Twin Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Night_Maiden_Twin_Crown.webp",
    "dmgNegation": {
      "physical": 2.5,
      "strike": 3.1,
      "slash": 2.5,
      "pierce": 3.4,
      "magic": 4.2,
      "fire": 3.8,
      "lightning": 4,
      "holy": 4.2
    },
    "resistances": {
      "immunity": 26,
      "robustness": 15,
      "focus": 22,
      "vitality": 22
    },
    "poise": 5,
    "weight": 3.3
  },
  {
    "id": "293100",
    "name": "Night Maiden Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Night_Maiden_Armor.webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 9.5,
      "slash": 8,
      "pierce": 10.2,
      "magic": 12.4,
      "fire": 11.4,
      "lightning": 11.9,
      "holy": 12.4
    },
    "resistances": {
      "immunity": 63,
      "robustness": 38,
      "focus": 55,
      "vitality": 55
    },
    "poise": 16,
    "weight": 8.3
  },
  {
    "id": "294000",
    "name": "Nox Swordstress Crown (Altered)",
    "category": "Head",
    "image": "/equipment_images/armours/Nox_Swordstress_Crown_(Altered).webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 2.8,
      "slash": 2.3,
      "pierce": 2.5,
      "magic": 4,
      "fire": 3.1,
      "lightning": 3.8,
      "holy": 3.4
    },
    "resistances": {
      "immunity": 21,
      "robustness": 11,
      "focus": 17,
      "vitality": 17
    },
    "poise": 2,
    "weight": 2.7
  },
  {
    "id": "294100",
    "name": "Nox Swordstress Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Nox_Swordstress_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 9.5,
      "slash": 8,
      "pierce": 8.8,
      "magic": 12.4,
      "fire": 10.2,
      "lightning": 11.9,
      "holy": 10.9
    },
    "resistances": {
      "immunity": 56,
      "robustness": 34,
      "focus": 49,
      "vitality": 49
    },
    "poise": 16,
    "weight": 7.5
  },
  {
    "id": "300000",
    "name": "Great Horned Headband",
    "category": "Head",
    "image": "/equipment_images/armours/Great_Horned_Headband.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 3.1,
      "slash": 2.8,
      "pierce": 2.8,
      "magic": 3.1,
      "fire": 3.4,
      "lightning": 3.8,
      "holy": 3.4
    },
    "resistances": {
      "immunity": 33,
      "robustness": 23,
      "focus": 27,
      "vitality": 22
    },
    "poise": 4,
    "weight": 3.3
  },
  {
    "id": "300100",
    "name": "Fur Raiment",
    "category": "Chest",
    "image": "/equipment_images/armours/Fur_Raiment.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 6.7,
      "slash": 6.1,
      "pierce": 6.1,
      "magic": 6.7,
      "fire": 7.1,
      "lightning": 8.8,
      "holy": 7.1
    },
    "resistances": {
      "immunity": 63,
      "robustness": 42,
      "focus": 55,
      "vitality": 38
    },
    "poise": 8,
    "weight": 5.1
  },
  {
    "id": "300300",
    "name": "Fur Leggings",
    "category": "Legs",
    "image": "/equipment_images/armours/Fur_Leggings.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3.8,
      "slash": 3.4,
      "pierce": 3.4,
      "magic": 3.8,
      "fire": 4,
      "lightning": 5,
      "holy": 4
    },
    "resistances": {
      "immunity": 39,
      "robustness": 26,
      "focus": 34,
      "vitality": 24
    },
    "poise": 5,
    "weight": 3.1
  },
  {
    "id": "301000",
    "name": "Shining Horned Headband",
    "category": "Head",
    "image": "/equipment_images/armours/Shining_Horned_Headband.webp",
    "dmgNegation": {
      "physical": 2.5,
      "strike": 2.8,
      "slash": 2.5,
      "pierce": 3.6,
      "magic": 3.6,
      "fire": 3.4,
      "lightning": 3.6,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 33,
      "robustness": 23,
      "focus": 27,
      "vitality": 20
    },
    "poise": 4,
    "effect": "Strengthens Ancestral Infant's Head",
    "weight": 3.3
  },
  {
    "id": "301100",
    "name": "Shaman Furs",
    "category": "Chest",
    "image": "/equipment_images/armours/Shaman_Furs.webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 6.1,
      "slash": 5.3,
      "pierce": 8,
      "magic": 8,
      "fire": 7.1,
      "lightning": 8,
      "holy": 6.7
    },
    "resistances": {
      "immunity": 63,
      "robustness": 42,
      "focus": 55,
      "vitality": 35
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "301300",
    "name": "Shaman Leggings",
    "category": "Legs",
    "image": "/equipment_images/armours/Shaman_Leggings.webp",
    "dmgNegation": {
      "physical": 3,
      "strike": 3.4,
      "slash": 3,
      "pierce": 4.5,
      "magic": 4.5,
      "fire": 4,
      "lightning": 4.5,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 39,
      "robustness": 26,
      "focus": 34,
      "vitality": 22
    },
    "poise": 4,
    "weight": 3.1
  },
  {
    "id": "310000",
    "name": "Duelist Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Duelist_Helm.webp",
    "dmgNegation": {
      "physical": 5.8,
      "strike": 5.2,
      "slash": 6.1,
      "pierce": 6.1,
      "magic": 4,
      "fire": 4.5,
      "lightning": 3.6,
      "holy": 4.2
    },
    "resistances": {
      "immunity": 24,
      "robustness": 24,
      "focus": 11,
      "vitality": 12
    },
    "poise": 10,
    "effect": "The wearer becomes a slightly easier target for foes",
    "weight": 6.2
  },
  {
    "id": "310100",
    "name": "Gravekeeper Cloak",
    "category": "Chest",
    "image": "/equipment_images/armours/Gravekeeper_Cloak.webp",
    "dmgNegation": {
      "physical": 7.1,
      "strike": 8.8,
      "slash": 7.1,
      "pierce": 7.1,
      "magic": 8,
      "fire": 9.5,
      "lightning": 10.2,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 63,
      "robustness": 25,
      "focus": 42,
      "vitality": 42
    },
    "poise": 12,
    "statChanges": {
      "maxEquipLoad": 0
    },
    "weight": 6.3
  },
  {
    "id": "310300",
    "name": "Duelist Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Duelist_Greaves.webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 7.1,
      "slash": 8,
      "pierce": 7.4,
      "magic": 5.8,
      "fire": 6.8,
      "lightning": 5.4,
      "holy": 6.2
    },
    "resistances": {
      "immunity": 29,
      "robustness": 31,
      "focus": 15,
      "vitality": 15
    },
    "poise": 14,
    "effect": "The wearer becomes a slightly easier target for foes",
    "weight": 7.3
  },
  {
    "id": "311100",
    "name": "Gravekeeper Cloak (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Gravekeeper_Cloak_(Altered).webp",
    "dmgNegation": {
      "physical": 6.7,
      "strike": 8,
      "slash": 6.7,
      "pierce": 6.7,
      "magic": 7.1,
      "fire": 8.8,
      "lightning": 9.5,
      "holy": 8
    },
    "resistances": {
      "immunity": 54,
      "robustness": 22,
      "focus": 34,
      "vitality": 34
    },
    "poise": 8,
    "effect": "The wearer becomes a slightly easier target for foes",
    "weight": 5.1
  },
  {
    "id": "320000",
    "name": "Sanguine Noble Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Sanguine_Noble_Hood.webp",
    "dmgNegation": {
      "physical": 1.4,
      "strike": 0.9,
      "slash": 0.9,
      "pierce": 0.9,
      "magic": 4.6,
      "fire": 3.8,
      "lightning": 4.5,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 18,
      "robustness": 5,
      "focus": 29,
      "vitality": 27
    },
    "poise": 2,
    "weight": 1.4
  },
  {
    "id": "320100",
    "name": "Sanguine Noble Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Sanguine_Noble_Robe.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 5.3,
      "slash": 5.3,
      "pierce": 5.3,
      "magic": 13.3,
      "fire": 11.9,
      "lightning": 13,
      "holy": 13.5
    },
    "resistances": {
      "immunity": 50,
      "robustness": 21,
      "focus": 83,
      "vitality": 76
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "320300",
    "name": "Sanguine Noble Waistcloth",
    "category": "Legs",
    "image": "/equipment_images/armours/Sanguine_Noble_Waistcloth.webp",
    "dmgNegation": {
      "physical": 3,
      "strike": 2.3,
      "slash": 2.3,
      "pierce": 2.3,
      "magic": 7.4,
      "fire": 6.5,
      "lightning": 7.3,
      "holy": 7.6
    },
    "resistances": {
      "immunity": 29,
      "robustness": 11,
      "focus": 44,
      "vitality": 41
    },
    "poise": 5,
    "weight": 2.5
  },
  {
    "id": "330000",
    "name": "Guardian Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Guardian_Mask.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 3.6,
      "slash": 3.6,
      "pierce": 3.4,
      "magic": 4.2,
      "fire": 4,
      "lightning": 4.2,
      "holy": 4.2
    },
    "resistances": {
      "immunity": 33,
      "robustness": 22,
      "focus": 26,
      "vitality": 24
    },
    "poise": 5,
    "weight": 3.8
  },
  {
    "id": "330100",
    "name": "Guardian Garb (Full Bloom)",
    "category": "Chest",
    "image": "/equipment_images/armours/Guardian_Garb_(Full_Bloom).webp",
    "dmgNegation": {
      "physical": 10.2,
      "strike": 10.2,
      "slash": 9.5,
      "pierce": 9.5,
      "magic": 11.9,
      "fire": -2.3,
      "lightning": 11.9,
      "holy": 11.4
    },
    "resistances": {
      "immunity": 71,
      "robustness": 46,
      "focus": 57,
      "vitality": 55
    },
    "poise": 15,
    "effect": "Raises the HP recovery effects of the Flask of Crimson Tears, but greatly lowers fire damage negation",
    "weight": 8.8
  },
  {
    "id": "330200",
    "name": "Guardian Bracers",
    "category": "Arms",
    "image": "/equipment_images/armours/Guardian_Bracers.webp",
    "dmgNegation": {
      "physical": 2.7,
      "strike": 2.5,
      "slash": 2.5,
      "pierce": 2.3,
      "magic": 2.9,
      "fire": 2.8,
      "lightning": 2.9,
      "holy": 2.9
    },
    "resistances": {
      "immunity": 25,
      "robustness": 17,
      "focus": 20,
      "vitality": 19
    },
    "poise": 3,
    "weight": 2.9
  },
  {
    "id": "330300",
    "name": "Guardian Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Guardian_Greaves.webp",
    "dmgNegation": {
      "physical": 6.2,
      "strike": 5.8,
      "slash": 5.8,
      "pierce": 5.4,
      "magic": 6.8,
      "fire": 6.5,
      "lightning": 6.8,
      "holy": 6.8
    },
    "resistances": {
      "immunity": 47,
      "robustness": 31,
      "focus": 37,
      "vitality": 35
    },
    "poise": 9,
    "weight": 5.5
  },
  {
    "id": "331100",
    "name": "Guardian Garb",
    "category": "Chest",
    "image": "/equipment_images/armours/Guardian_Garb.webp",
    "dmgNegation": {
      "physical": 9.5,
      "strike": 9.5,
      "slash": 8.8,
      "pierce": 8,
      "magic": 10.9,
      "fire": 10.2,
      "lightning": 10.9,
      "holy": 10.9
    },
    "resistances": {
      "immunity": 61,
      "robustness": 38,
      "focus": 50,
      "vitality": 42
    },
    "poise": 15,
    "weight": 7.7
  },
  {
    "id": "340000",
    "name": "Cleanrot Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Cleanrot_Helm.webp",
    "dmgNegation": {
      "physical": 5.2,
      "strike": 4.8,
      "slash": 5.8,
      "pierce": 6.3,
      "magic": 4.5,
      "fire": 4.6,
      "lightning": 4,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 27,
      "robustness": 29,
      "focus": 12,
      "vitality": 14
    },
    "poise": 9,
    "weight": 6.4
  },
  {
    "id": "340100",
    "name": "Cleanrot Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Cleanrot_Armor.webp",
    "dmgNegation": {
      "physical": 14.6,
      "strike": 13.4,
      "slash": 16,
      "pierce": 17.5,
      "magic": 12.6,
      "fire": 12.8,
      "lightning": 11.4,
      "holy": 13.5
    },
    "resistances": {
      "immunity": 63,
      "robustness": 67,
      "focus": 28,
      "vitality": 32
    },
    "poise": 27,
    "weight": 15
  },
  {
    "id": "340200",
    "name": "Cleanrot Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Cleanrot_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.6,
      "strike": 3.3,
      "slash": 4,
      "pierce": 4.4,
      "magic": 3.1,
      "fire": 3.2,
      "lightning": 2.8,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 21,
      "robustness": 22,
      "focus": 9,
      "vitality": 11
    },
    "poise": 6,
    "weight": 5
  },
  {
    "id": "340300",
    "name": "Cleanrot Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Cleanrot_Greaves.webp",
    "dmgNegation": {
      "physical": 8.4,
      "strike": 7.6,
      "slash": 9.2,
      "pierce": 10.1,
      "magic": 7.2,
      "fire": 7.3,
      "lightning": 6.5,
      "holy": 7.7
    },
    "resistances": {
      "immunity": 39,
      "robustness": 41,
      "focus": 17,
      "vitality": 20
    },
    "poise": 16,
    "weight": 9.3
  },
  {
    "id": "341000",
    "name": "Cleanrot Helm (Altered)",
    "category": "Head",
    "image": "/equipment_images/armours/Cleanrot_Helm_(Altered).webp",
    "dmgNegation": {
      "physical": 4.6,
      "strike": 4.2,
      "slash": 5,
      "pierce": 5.5,
      "magic": 4,
      "fire": 4.2,
      "lightning": 3.4,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 21,
      "robustness": 21,
      "focus": 9,
      "vitality": 10
    },
    "poise": 7,
    "weight": 5.5
  },
  {
    "id": "341100",
    "name": "Cleanrot Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Cleanrot_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 12.4,
      "slash": 14.6,
      "pierce": 16,
      "magic": 11.9,
      "fire": 12.4,
      "lightning": 10.2,
      "holy": 13
    },
    "resistances": {
      "immunity": 52,
      "robustness": 54,
      "focus": 22,
      "vitality": 22
    },
    "poise": 24,
    "weight": 13.7
  },
  {
    "id": "350000",
    "name": "Fire Monk Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Fire_Monk_Hood.webp",
    "dmgNegation": {
      "physical": 4.6,
      "strike": 3.8,
      "slash": 4.2,
      "pierce": 4,
      "magic": 3.1,
      "fire": 4.5,
      "lightning": 2.5,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 11,
      "robustness": 20,
      "focus": 9,
      "vitality": 9
    },
    "poise": 6,
    "weight": 4
  },
  {
    "id": "350100",
    "name": "Fire Monk Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Fire_Monk_Armor.webp",
    "dmgNegation": {
      "physical": 14,
      "strike": 12.4,
      "slash": 13.5,
      "pierce": 12.4,
      "magic": 10.9,
      "fire": 13.3,
      "lightning": 9.5,
      "holy": 9.5
    },
    "resistances": {
      "immunity": 32,
      "robustness": 55,
      "focus": 24,
      "vitality": 24
    },
    "poise": 22,
    "weight": 11.8
  },
  {
    "id": "350200",
    "name": "Fire Monk Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Fire_Monk_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.5,
      "strike": 3.1,
      "slash": 3.3,
      "pierce": 3.1,
      "magic": 2.7,
      "fire": 3.3,
      "lightning": 2.3,
      "holy": 2.3
    },
    "resistances": {
      "immunity": 11,
      "robustness": 18,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.9
  },
  {
    "id": "350300",
    "name": "Fire Monk Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Fire_Monk_Greaves.webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 7.1,
      "slash": 7.7,
      "pierce": 7.1,
      "magic": 6.2,
      "fire": 7.6,
      "lightning": 5.4,
      "holy": 5.4
    },
    "resistances": {
      "immunity": 20,
      "robustness": 34,
      "focus": 15,
      "vitality": 15
    },
    "poise": 13,
    "weight": 7.3
  },
  {
    "id": "351000",
    "name": "Blackflame Monk Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Blackflame_Monk_Hood.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.4,
      "slash": 4.6,
      "pierce": 4.2,
      "magic": 2.8,
      "fire": 4.4,
      "lightning": 2.1,
      "holy": 2.8
    },
    "resistances": {
      "immunity": 11,
      "robustness": 20,
      "focus": 5,
      "vitality": 11
    },
    "poise": 7,
    "weight": 4
  },
  {
    "id": "351100",
    "name": "Blackflame Monk Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Blackflame_Monk_Armor.webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 11.4,
      "slash": 14.6,
      "pierce": 12.9,
      "magic": 10.2,
      "fire": 13,
      "lightning": 8,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 32,
      "robustness": 55,
      "focus": 21,
      "vitality": 32
    },
    "poise": 24,
    "weight": 11.8
  },
  {
    "id": "351200",
    "name": "Blackflame Monk Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Blackflame_Monk_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.3,
      "strike": 2.8,
      "slash": 3.6,
      "pierce": 3.2,
      "magic": 2.5,
      "fire": 3.2,
      "lightning": 1.9,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 11,
      "robustness": 18,
      "focus": 7,
      "vitality": 11
    },
    "poise": 5,
    "weight": 3.9
  },
  {
    "id": "351300",
    "name": "Blackflame Monk Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Blackflame_Monk_Greaves.webp",
    "dmgNegation": {
      "physical": 7.7,
      "strike": 6.5,
      "slash": 8.4,
      "pierce": 7.4,
      "magic": 5.8,
      "fire": 7.4,
      "lightning": 4.5,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 20,
      "robustness": 34,
      "focus": 13,
      "vitality": 20
    },
    "poise": 14,
    "weight": 7.3
  },
  {
    "id": "360000",
    "name": "Fire Prelate Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Fire_Prelate_Helm.webp",
    "dmgNegation": {
      "physical": 7,
      "strike": 6.1,
      "slash": 6.7,
      "pierce": 6.7,
      "magic": 4.8,
      "fire": 7.2,
      "lightning": 4.6,
      "holy": 4.7
    },
    "resistances": {
      "immunity": 29,
      "robustness": 27,
      "focus": 39,
      "vitality": 22
    },
    "poise": 14,
    "weight": 10.6
  },
  {
    "id": "360100",
    "name": "Fire Prelate Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Fire_Prelate_Armor.webp",
    "dmgNegation": {
      "physical": 19.2,
      "strike": 17,
      "slash": 18.3,
      "pierce": 18.3,
      "magic": 13.5,
      "fire": 19.8,
      "lightning": 13,
      "holy": 13.3
    },
    "resistances": {
      "immunity": 67,
      "robustness": 63,
      "focus": 90,
      "vitality": 50
    },
    "poise": 45,
    "weight": 24.7
  },
  {
    "id": "360200",
    "name": "Fire Prelate Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Fire_Prelate_Gauntlets.webp",
    "dmgNegation": {
      "physical": 4.9,
      "strike": 4.3,
      "slash": 4.6,
      "pierce": 4.6,
      "magic": 3.3,
      "fire": 5,
      "lightning": 3.2,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 22,
      "robustness": 21,
      "focus": 30,
      "vitality": 17
    },
    "poise": 10,
    "weight": 8.2
  },
  {
    "id": "360300",
    "name": "Fire Prelate Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Fire_Prelate_Greaves.webp",
    "dmgNegation": {
      "physical": 11.1,
      "strike": 9.8,
      "slash": 10.6,
      "pierce": 10.6,
      "magic": 7.7,
      "fire": 11.5,
      "lightning": 7.4,
      "holy": 7.6
    },
    "resistances": {
      "immunity": 41,
      "robustness": 39,
      "focus": 56,
      "vitality": 31
    },
    "poise": 27,
    "weight": 15.3
  },
  {
    "id": "361100",
    "name": "Fire Prelate Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Fire_Prelate_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 18.7,
      "strike": 16.3,
      "slash": 17.5,
      "pierce": 17.5,
      "magic": 13.3,
      "fire": 18.3,
      "lightning": 12.8,
      "holy": 13
    },
    "resistances": {
      "immunity": 57,
      "robustness": 54,
      "focus": 75,
      "vitality": 42
    },
    "poise": 43,
    "weight": 23.6
  },
  {
    "id": "370000",
    "name": "Aristocrat Headband",
    "category": "Head",
    "image": "/equipment_images/armours/Aristocrat_Headband.webp",
    "dmgNegation": {
      "physical": 1.9,
      "strike": 1.9,
      "slash": 1.9,
      "pierce": 1.6,
      "magic": 4,
      "fire": 3.6,
      "lightning": 3.8,
      "holy": 4
    },
    "resistances": {
      "immunity": 15,
      "robustness": 10,
      "focus": 25,
      "vitality": 22
    },
    "poise": 2,
    "weight": 1.2
  },
  {
    "id": "370100",
    "name": "Aristocrat Garb",
    "category": "Chest",
    "image": "/equipment_images/armours/Aristocrat_Garb.webp",
    "dmgNegation": {
      "physical": 7.8,
      "strike": 8.6,
      "slash": 7.8,
      "pierce": 7.8,
      "magic": 6.5,
      "fire": 6.9,
      "lightning": 7.8,
      "holy": 6.5
    },
    "resistances": {
      "immunity": 47,
      "robustness": 33,
      "focus": 36,
      "vitality": 30
    },
    "poise": 12,
    "weight": 4.9
  },
  {
    "id": "370300",
    "name": "Aristocrat Boots",
    "category": "Legs",
    "image": "/equipment_images/armours/Aristocrat_Boots.webp",
    "dmgNegation": {
      "physical": 4.3,
      "strike": 4.8,
      "slash": 4.3,
      "pierce": 4.3,
      "magic": 3.6,
      "fire": 3.8,
      "lightning": 4.3,
      "holy": 3.6
    },
    "resistances": {
      "immunity": 29,
      "robustness": 21,
      "focus": 23,
      "vitality": 19
    },
    "poise": 7,
    "weight": 2.9
  },
  {
    "id": "371100",
    "name": "Aristocrat Garb (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Aristocrat_Garb_(Altered).webp",
    "dmgNegation": {
      "physical": 7.1,
      "strike": 8,
      "slash": 7.1,
      "pierce": 7.1,
      "magic": 6.1,
      "fire": 6.7,
      "lightning": 7.1,
      "holy": 6.1
    },
    "resistances": {
      "immunity": 42,
      "robustness": 29,
      "focus": 32,
      "vitality": 25
    },
    "poise": 10,
    "weight": 4.1
  },
  {
    "id": "380000",
    "name": "Aristocrat Hat",
    "category": "Head",
    "image": "/equipment_images/armours/Aristocrat_Hat.webp",
    "dmgNegation": {
      "physical": 3.1,
      "strike": 3.1,
      "slash": 2.8,
      "pierce": 3.1,
      "magic": 3.8,
      "fire": 4,
      "lightning": 3.8,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 22,
      "robustness": 14,
      "focus": 18,
      "vitality": 20
    },
    "poise": 4,
    "weight": 3
  },
  {
    "id": "380100",
    "name": "Aristocrat Coat",
    "category": "Chest",
    "image": "/equipment_images/armours/Aristocrat_Coat.webp",
    "dmgNegation": {
      "physical": 8.8,
      "strike": 8.8,
      "slash": 8,
      "pierce": 8.8,
      "magic": 10.9,
      "fire": 11.4,
      "lightning": 10.9,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 50,
      "robustness": 32,
      "focus": 42,
      "vitality": 46
    },
    "poise": 13,
    "weight": 7.1
  },
  {
    "id": "390000",
    "name": "Old Aristocrat Cowl",
    "category": "Head",
    "image": "/equipment_images/armours/Old_Aristocrat_Cowl.webp",
    "dmgNegation": {
      "physical": 2.5,
      "strike": 2.5,
      "slash": 2.3,
      "pierce": 2.5,
      "magic": 3.4,
      "fire": 3.6,
      "lightning": 3.4,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 18,
      "robustness": 11,
      "focus": 15,
      "vitality": 16
    },
    "poise": 3,
    "weight": 2.2
  },
  {
    "id": "390100",
    "name": "Old Aristocrat Gown",
    "category": "Chest",
    "image": "/equipment_images/armours/Old_Aristocrat_Gown.webp",
    "dmgNegation": {
      "physical": 7.1,
      "strike": 7.1,
      "slash": 6.7,
      "pierce": 7.1,
      "magic": 9.5,
      "fire": 10.2,
      "lightning": 9.5,
      "holy": 7.1
    },
    "resistances": {
      "immunity": 42,
      "robustness": 25,
      "focus": 35,
      "vitality": 38
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "390300",
    "name": "Old Aristocrat Shoes",
    "category": "Legs",
    "image": "/equipment_images/armours/Old_Aristocrat_Shoes.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3.4,
      "slash": 3,
      "pierce": 3.4,
      "magic": 4.5,
      "fire": 5,
      "lightning": 4.5,
      "holy": 3.4
    },
    "resistances": {
      "immunity": 22,
      "robustness": 15,
      "focus": 17,
      "vitality": 20
    },
    "poise": 2,
    "weight": 2
  },
  {
    "id": "420000",
    "name": "Vulgar Militia Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Vulgar_Militia_Helm.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3.8,
      "slash": 3.6,
      "pierce": 3.1,
      "magic": 3.8,
      "fire": 3.8,
      "lightning": 4,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 31,
      "robustness": 16,
      "focus": 23,
      "vitality": 23
    },
    "poise": 6,
    "weight": 3.6
  },
  {
    "id": "420100",
    "name": "Vulgar Militia Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Vulgar_Militia_Armor.webp",
    "dmgNegation": {
      "physical": 8.8,
      "strike": 10.2,
      "slash": 9.5,
      "pierce": 8,
      "magic": 10.2,
      "fire": 10.2,
      "lightning": 10.9,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 67,
      "robustness": 35,
      "focus": 50,
      "vitality": 50
    },
    "poise": 16,
    "weight": 7.7
  },
  {
    "id": "420200",
    "name": "Vulgar Militia Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Vulgar_Militia_Gauntlets.webp",
    "dmgNegation": {
      "physical": 1.7,
      "strike": 2.1,
      "slash": 1.9,
      "pierce": 1.6,
      "magic": 2.1,
      "fire": 2.1,
      "lightning": 2.3,
      "holy": 2.1
    },
    "resistances": {
      "immunity": 20,
      "robustness": 9,
      "focus": 14,
      "vitality": 14
    },
    "poise": 3,
    "weight": 2.1
  },
  {
    "id": "420300",
    "name": "Vulgar Militia Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Vulgar_Militia_Greaves.webp",
    "dmgNegation": {
      "physical": 5.4,
      "strike": 6.2,
      "slash": 5.8,
      "pierce": 5,
      "magic": 6.2,
      "fire": 6.2,
      "lightning": 6.5,
      "holy": 6.2
    },
    "resistances": {
      "immunity": 44,
      "robustness": 24,
      "focus": 34,
      "vitality": 34
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "430000",
    "name": "Sage Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Sage_Hood.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 2.1,
      "slash": 2.1,
      "pierce": 1.4,
      "magic": 4.8,
      "fire": 4.5,
      "lightning": 4.6,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 16,
      "robustness": 10,
      "focus": 31,
      "vitality": 33
    },
    "poise": 3,
    "weight": 2.2
  },
  {
    "id": "430100",
    "name": "Sage Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Sage_Robe.webp",
    "dmgNegation": {
      "physical": 6.7,
      "strike": 6.1,
      "slash": 6.1,
      "pierce": 4.2,
      "magic": 13.5,
      "fire": 12.6,
      "lightning": 13,
      "holy": 13.5
    },
    "resistances": {
      "immunity": 38,
      "robustness": 23,
      "focus": 71,
      "vitality": 76
    },
    "poise": 8,
    "weight": 5.1
  },
  {
    "id": "430300",
    "name": "Sage Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Sage_Trousers.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3,
      "slash": 3,
      "pierce": 1.5,
      "magic": 7.6,
      "fire": 7.1,
      "lightning": 7.3,
      "holy": 7.6
    },
    "resistances": {
      "immunity": 22,
      "robustness": 13,
      "focus": 39,
      "vitality": 41
    },
    "poise": 4,
    "weight": 2.5
  },
  {
    "id": "440000",
    "name": "Pumpkin Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Pumpkin_Helm.webp",
    "dmgNegation": {
      "physical": 7,
      "strike": 5.9,
      "slash": 6.7,
      "pierce": 6.7,
      "magic": 4.6,
      "fire": 4.7,
      "lightning": 5.2,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 27,
      "robustness": 42,
      "focus": 44,
      "vitality": 18
    },
    "poise": 11,
    "effect": "Reduces damage from headshots and impacts",
    "weight": 12.3
  },
  {
    "id": "460000",
    "name": "Elden Lord Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Elden_Lord_Crown.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 3.4,
      "slash": 3.6,
      "pierce": 4,
      "magic": 2.5,
      "fire": 3.6,
      "lightning": 2.1,
      "holy": 2.3
    },
    "resistances": {
      "immunity": 11,
      "robustness": 20,
      "focus": 0,
      "vitality": 5
    },
    "poise": 5,
    "weight": 3.6
  },
  {
    "id": "460100",
    "name": "Elden Lord Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Elden_Lord_Armor.webp",
    "dmgNegation": {
      "physical": 11.9,
      "strike": 10.9,
      "slash": 11.4,
      "pierce": 12.4,
      "magic": 8.8,
      "fire": 11.4,
      "lightning": 7.1,
      "holy": 8
    },
    "resistances": {
      "immunity": 32,
      "robustness": 55,
      "focus": 18,
      "vitality": 21
    },
    "poise": 19,
    "weight": 9.2
  },
  {
    "id": "460200",
    "name": "Elden Lord Bracers",
    "category": "Arms",
    "image": "/equipment_images/armours/Elden_Lord_Bracers.webp",
    "dmgNegation": {
      "physical": 2.9,
      "strike": 2.7,
      "slash": 2.8,
      "pierce": 3.1,
      "magic": 2.1,
      "fire": 2.8,
      "lightning": 1.7,
      "holy": 1.9
    },
    "resistances": {
      "immunity": 11,
      "robustness": 18,
      "focus": 6,
      "vitality": 7
    },
    "poise": 4,
    "weight": 3.1
  },
  {
    "id": "460300",
    "name": "Elden Lord Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Elden_Lord_Greaves.webp",
    "dmgNegation": {
      "physical": 6.5,
      "strike": 5.8,
      "slash": 6.2,
      "pierce": 6.8,
      "magic": 4.5,
      "fire": 6.2,
      "lightning": 3.8,
      "holy": 4
    },
    "resistances": {
      "immunity": 16,
      "robustness": 31,
      "focus": 7,
      "vitality": 11
    },
    "poise": 10,
    "weight": 5.5
  },
  {
    "id": "461100",
    "name": "Elden Lord Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Elden_Lord_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 11.1,
      "strike": 9.9,
      "slash": 10.6,
      "pierce": 11.6,
      "magic": 7.7,
      "fire": 10.6,
      "lightning": 6.4,
      "holy": 6.8
    },
    "resistances": {
      "immunity": 22,
      "robustness": 45,
      "focus": 10,
      "vitality": 16
    },
    "poise": 17,
    "weight": 8.4
  },
  {
    "id": "470000",
    "name": "Radahn's Redmane Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Radahn's_Redmane_Helm.webp",
    "dmgNegation": {
      "physical": 6.8,
      "strike": 5.4,
      "slash": 6.7,
      "pierce": 6.3,
      "magic": 4.8,
      "fire": 5,
      "lightning": 4.5,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 26,
      "robustness": 42,
      "focus": 18,
      "vitality": 16
    },
    "poise": 11,
    "weight": 7.5
  },
  {
    "id": "470100",
    "name": "Radahn's Lion Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Radahn's_Lion_Armor.webp",
    "dmgNegation": {
      "physical": 18.7,
      "strike": 15,
      "slash": 18.3,
      "pierce": 17.5,
      "magic": 13.5,
      "fire": 14.1,
      "lightning": 12.6,
      "holy": 13.5
    },
    "resistances": {
      "immunity": 60,
      "robustness": 99,
      "focus": 42,
      "vitality": 38
    },
    "poise": 34,
    "weight": 17.5
  },
  {
    "id": "470200",
    "name": "Radahn's Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Radahn's_Gauntlets.webp",
    "dmgNegation": {
      "physical": 4.7,
      "strike": 3.7,
      "slash": 4.6,
      "pierce": 4.4,
      "magic": 3.3,
      "fire": 3.5,
      "lightning": 3.1,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 20,
      "robustness": 33,
      "focus": 14,
      "vitality": 13
    },
    "poise": 7,
    "weight": 5.8
  },
  {
    "id": "470300",
    "name": "Radahn's Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Radahn's_Greaves.webp",
    "dmgNegation": {
      "physical": 10.8,
      "strike": 8.6,
      "slash": 10.6,
      "pierce": 10.1,
      "magic": 7.7,
      "fire": 8.1,
      "lightning": 7.2,
      "holy": 7.7
    },
    "resistances": {
      "immunity": 37,
      "robustness": 61,
      "focus": 26,
      "vitality": 24
    },
    "poise": 20,
    "weight": 10.8
  },
  {
    "id": "471100",
    "name": "Radahn's Lion Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Radahn's_Lion_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 18.5,
      "strike": 14.6,
      "slash": 17.7,
      "pierce": 17,
      "magic": 13.3,
      "fire": 14,
      "lightning": 12.4,
      "holy": 13.3
    },
    "resistances": {
      "immunity": 52,
      "robustness": 82,
      "focus": 34,
      "vitality": 32
    },
    "poise": 33,
    "weight": 16.4
  },
  {
    "id": "480100",
    "name": "Lord of Blood's Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Lord_of_Blood's_Robe.webp",
    "dmgNegation": {
      "physical": 9.3,
      "strike": 10,
      "slash": 8.6,
      "pierce": 8.6,
      "magic": 10,
      "fire": 12.2,
      "lightning": 12.2,
      "holy": 13.3
    },
    "resistances": {
      "immunity": 63,
      "robustness": 23,
      "focus": 55,
      "vitality": 55
    },
    "poise": 17,
    "weight": 8.1
  },
  {
    "id": "481100",
    "name": "Lord of Blood's Robe (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Lord_of_Blood's_Robe_(Altered).webp",
    "dmgNegation": {
      "physical": 8.9,
      "strike": 9.6,
      "slash": 8.1,
      "pierce": 8.1,
      "magic": 9.6,
      "fire": 12,
      "lightning": 12,
      "holy": 13.4
    },
    "resistances": {
      "immunity": 57,
      "robustness": 19,
      "focus": 47,
      "vitality": 47
    },
    "poise": 16,
    "weight": 7.3
  },
  {
    "id": "510000",
    "name": "Queen's Crescent Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Queen's_Crescent_Crown.webp",
    "dmgNegation": {
      "physical": 2.1,
      "strike": 1.8,
      "slash": 1.8,
      "pierce": 1.4,
      "magic": 4.9,
      "fire": 4.5,
      "lightning": 4.6,
      "holy": 4.7
    },
    "resistances": {
      "immunity": 18,
      "robustness": 11,
      "focus": 31,
      "vitality": 35
    },
    "poise": 3,
    "effect": "Increases intelligence",
    "statChanges": {
      "intelligence": 3
    },
    "weight": 2.2
  },
  {
    "id": "510100",
    "name": "Queen's Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Queen's_Robe.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 5.3,
      "slash": 5.3,
      "pierce": 4.2,
      "magic": 13.8,
      "fire": 12.6,
      "lightning": 12.8,
      "holy": 13.3
    },
    "resistances": {
      "immunity": 42,
      "robustness": 25,
      "focus": 71,
      "vitality": 83
    },
    "poise": 8,
    "weight": 5.1
  },
  {
    "id": "510200",
    "name": "Queen's Bracelets",
    "category": "Arms",
    "image": "/equipment_images/armours/Queen's_Bracelets.webp",
    "dmgNegation": {
      "physical": 1.5,
      "strike": 1.3,
      "slash": 1.3,
      "pierce": 1,
      "magic": 3.4,
      "fire": 3.1,
      "lightning": 3.2,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 14,
      "robustness": 8,
      "focus": 24,
      "vitality": 28
    },
    "poise": 2,
    "weight": 1.7
  },
  {
    "id": "510300",
    "name": "Queen's Leggings",
    "category": "Legs",
    "image": "/equipment_images/armours/Queen's_Leggings.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 1.5,
      "slash": 1.5,
      "pierce": 0.3,
      "magic": 7.6,
      "fire": 6.8,
      "lightning": 7.1,
      "holy": 7.3
    },
    "resistances": {
      "immunity": 22,
      "robustness": 14,
      "focus": 37,
      "vitality": 41
    },
    "poise": 3,
    "weight": 2
  },
  {
    "id": "520000",
    "name": "Godskin Apostle Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Godskin_Apostle_Hood.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 2.1,
      "slash": 2.1,
      "pierce": 1.4,
      "magic": 4.6,
      "fire": 4.4,
      "lightning": 4.5,
      "holy": 5
    },
    "resistances": {
      "immunity": 20,
      "robustness": 10,
      "focus": 33,
      "vitality": 31
    },
    "poise": 3,
    "weight": 2.2
  },
  {
    "id": "520100",
    "name": "Godskin Apostle Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Godskin_Apostle_Robe.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 5.3,
      "slash": 5.3,
      "pierce": 2.7,
      "magic": 12.6,
      "fire": 11.9,
      "lightning": 12.4,
      "holy": 13.8
    },
    "resistances": {
      "immunity": 42,
      "robustness": 21,
      "focus": 67,
      "vitality": 63
    },
    "poise": 8,
    "weight": 4.1
  },
  {
    "id": "520200",
    "name": "Godskin Apostle Bracelets",
    "category": "Arms",
    "image": "/equipment_images/armours/Godskin_Apostle_Bracelets.webp",
    "dmgNegation": {
      "physical": 1.7,
      "strike": 1.6,
      "slash": 1.6,
      "pierce": 1.3,
      "magic": 3.2,
      "fire": 3.1,
      "lightning": 3.2,
      "holy": 3.6
    },
    "resistances": {
      "immunity": 17,
      "robustness": 8,
      "focus": 28,
      "vitality": 25
    },
    "poise": 3,
    "weight": 2.1
  },
  {
    "id": "520300",
    "name": "Godskin Apostle Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Godskin_Apostle_Trousers.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3,
      "slash": 3,
      "pierce": 1.5,
      "magic": 7.2,
      "fire": 6.8,
      "lightning": 7.1,
      "holy": 7.9
    },
    "resistances": {
      "immunity": 26,
      "robustness": 13,
      "focus": 41,
      "vitality": 39
    },
    "poise": 5,
    "weight": 2.5
  },
  {
    "id": "530000",
    "name": "Godskin Noble Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Godskin_Noble_Hood.webp",
    "dmgNegation": {
      "physical": 1.4,
      "strike": 2.8,
      "slash": 1.8,
      "pierce": 1.4,
      "magic": 4.5,
      "fire": 4,
      "lightning": 4.2,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 16,
      "robustness": 10,
      "focus": 27,
      "vitality": 29
    },
    "poise": 3,
    "weight": 1.7
  },
  {
    "id": "530100",
    "name": "Godskin Noble Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Godskin_Noble_Robe.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 9.5,
      "slash": 6.7,
      "pierce": 6.1,
      "magic": 13,
      "fire": 12.4,
      "lightning": 12.6,
      "holy": 14.1
    },
    "resistances": {
      "immunity": 46,
      "robustness": 25,
      "focus": 76,
      "vitality": 83
    },
    "poise": 12,
    "effect": "Strengthens the Noble Presence incantation",
    "weight": 6.3
  },
  {
    "id": "530200",
    "name": "Godskin Noble Bracelets",
    "category": "Arms",
    "image": "/equipment_images/armours/Godskin_Noble_Bracelets.webp",
    "dmgNegation": {
      "physical": 1.3,
      "strike": 2.1,
      "slash": 1.5,
      "pierce": 1.3,
      "magic": 3.2,
      "fire": 2.9,
      "lightning": 3.1,
      "holy": 3.4
    },
    "resistances": {
      "immunity": 14,
      "robustness": 8,
      "focus": 24,
      "vitality": 25
    },
    "poise": 3,
    "weight": 1.7
  },
  {
    "id": "530300",
    "name": "Godskin Noble Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Godskin_Noble_Trousers.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 4.5,
      "slash": 3,
      "pierce": 2.3,
      "magic": 7.2,
      "fire": 6.5,
      "lightning": 6.8,
      "holy": 7.7
    },
    "resistances": {
      "immunity": 24,
      "robustness": 14,
      "focus": 39,
      "vitality": 41
    },
    "poise": 6,
    "weight": 2.5
  },
  {
    "id": "540000",
    "name": "Depraved Perfumer Headscarf",
    "category": "Head",
    "image": "/equipment_images/armours/Depraved_Perfumer_Headscarf.webp",
    "dmgNegation": {
      "physical": 2,
      "strike": 2,
      "slash": 1.7,
      "pierce": 1.3,
      "magic": 4.6,
      "fire": 4.5,
      "lightning": 4.4,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 28,
      "robustness": 10,
      "focus": 25,
      "vitality": 34
    },
    "poise": 3,
    "weight": 2.1
  },
  {
    "id": "540100",
    "name": "Depraved Perfumer Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Depraved_Perfumer_Robe.webp",
    "dmgNegation": {
      "physical": 6,
      "strike": 6,
      "slash": 5.2,
      "pierce": 4.1,
      "magic": 13.2,
      "fire": 12.7,
      "lightning": 12.5,
      "holy": 12.7
    },
    "resistances": {
      "immunity": 65,
      "robustness": 22,
      "focus": 55,
      "vitality": 80
    },
    "poise": 8,
    "weight": 5
  },
  {
    "id": "540200",
    "name": "Depraved Perfumer Gloves",
    "category": "Arms",
    "image": "/equipment_images/armours/Depraved_Perfumer_Gloves.webp",
    "dmgNegation": {
      "physical": 1.5,
      "strike": 1.5,
      "slash": 1.4,
      "pierce": 1.2,
      "magic": 3.2,
      "fire": 3.1,
      "lightning": 3.1,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 23,
      "robustness": 8,
      "focus": 20,
      "vitality": 28
    },
    "poise": 2,
    "weight": 2
  },
  {
    "id": "540300",
    "name": "Depraved Perfumer Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Depraved_Perfumer_Trousers.webp",
    "dmgNegation": {
      "physical": 3.9,
      "strike": 3.9,
      "slash": 3.7,
      "pierce": 3.3,
      "magic": 7.8,
      "fire": 7.5,
      "lightning": 7.3,
      "holy": 7.5
    },
    "resistances": {
      "immunity": 46,
      "robustness": 15,
      "focus": 40,
      "vitality": 58
    },
    "poise": 7,
    "weight": 4.3
  },
  {
    "id": "541100",
    "name": "Depraved Perfumer Robe (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Depraved_Perfumer_Robe_(Altered).webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 5.2,
      "slash": 4.1,
      "pierce": 2.6,
      "magic": 13,
      "fire": 12.6,
      "lightning": 12.4,
      "holy": 12.6
    },
    "resistances": {
      "immunity": 63,
      "robustness": 18,
      "focus": 48,
      "vitality": 63
    },
    "poise": 7,
    "weight": 4
  },
  {
    "id": "570000",
    "name": "Crucible Axe Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Crucible_Axe_Helm.webp",
    "dmgNegation": {
      "physical": 6.3,
      "strike": 5,
      "slash": 6.1,
      "pierce": 6.1,
      "magic": 4.6,
      "fire": 4.6,
      "lightning": 4,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 22,
      "robustness": 31,
      "focus": 15,
      "vitality": 15
    },
    "poise": 11,
    "effect": "Strengthens Aspects of the Crucible incantations",
    "weight": 6.6
  },
  {
    "id": "570100",
    "name": "Crucible Axe Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Crucible_Axe_Armor.webp",
    "dmgNegation": {
      "physical": 17.5,
      "strike": 13.9,
      "slash": 16.8,
      "pierce": 16.8,
      "magic": 13,
      "fire": 12.8,
      "lightning": 11.4,
      "holy": 13.5
    },
    "resistances": {
      "immunity": 50,
      "robustness": 71,
      "focus": 35,
      "vitality": 35
    },
    "poise": 33,
    "effect": "Strengthens Aspects of the Crucible incantations",
    "weight": 15.5
  },
  {
    "id": "570200",
    "name": "Crucible Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Crucible_Gauntlets.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.4,
      "slash": 4.2,
      "pierce": 4.2,
      "magic": 3.2,
      "fire": 3.2,
      "lightning": 2.8,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 17,
      "robustness": 24,
      "focus": 12,
      "vitality": 12
    },
    "poise": 7,
    "weight": 5.2
  },
  {
    "id": "570300",
    "name": "Crucible Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Crucible_Greaves.webp",
    "dmgNegation": {
      "physical": 10.1,
      "strike": 8,
      "slash": 9.6,
      "pierce": 9.6,
      "magic": 7.4,
      "fire": 7.3,
      "lightning": 6.5,
      "holy": 7.7
    },
    "resistances": {
      "immunity": 31,
      "robustness": 44,
      "focus": 22,
      "vitality": 22
    },
    "poise": 20,
    "weight": 9.6
  },
  {
    "id": "571000",
    "name": "Crucible Tree Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Crucible_Tree_Helm.webp",
    "dmgNegation": {
      "physical": 6.5,
      "strike": 5,
      "slash": 6.3,
      "pierce": 5.6,
      "magic": 4.6,
      "fire": 4.2,
      "lightning": 4,
      "holy": 5.2
    },
    "resistances": {
      "immunity": 22,
      "robustness": 31,
      "focus": 15,
      "vitality": 15
    },
    "poise": 11,
    "effect": "Strengthens Aspects of the Crucible incantations",
    "weight": 6.6
  },
  {
    "id": "571100",
    "name": "Crucible Tree Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Crucible_Tree_Armor.webp",
    "dmgNegation": {
      "physical": 17.7,
      "strike": 13.9,
      "slash": 17.5,
      "pierce": 15.8,
      "magic": 13,
      "fire": 11.9,
      "lightning": 11.4,
      "holy": 14.5
    },
    "resistances": {
      "immunity": 50,
      "robustness": 71,
      "focus": 35,
      "vitality": 35
    },
    "poise": 33,
    "effect": "Strengthens Aspects of the Crucible incantations",
    "weight": 15.5
  },
  {
    "id": "572100",
    "name": "Crucible Axe Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Crucible_Axe_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 16.8,
      "strike": 13.4,
      "slash": 16,
      "pierce": 16,
      "magic": 12.8,
      "fire": 12.6,
      "lightning": 10.9,
      "holy": 13.3
    },
    "resistances": {
      "immunity": 42,
      "robustness": 61,
      "focus": 29,
      "vitality": 29
    },
    "poise": 31,
    "effect": "Strengthens Aspects of the Crucible incantations",
    "weight": 14.9
  },
  {
    "id": "573100",
    "name": "Crucible Tree Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Crucible_Tree_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 17,
      "strike": 13.4,
      "slash": 16,
      "pierce": 15.6,
      "magic": 12.8,
      "fire": 11.4,
      "lightning": 10.9,
      "holy": 14.1
    },
    "resistances": {
      "immunity": 42,
      "robustness": 61,
      "focus": 29,
      "vitality": 29
    },
    "poise": 31,
    "effect": "Strengthens Aspects of the Crucible incantations",
    "weight": 14.9
  },
  {
    "id": "580000",
    "name": "Lusat's Glintstone Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Lusat's_Glintstone_Crown.webp",
    "dmgNegation": {
      "physical": 3.1,
      "strike": 2.3,
      "slash": 3.1,
      "pierce": 2.3,
      "magic": 5.5,
      "fire": 4.6,
      "lightning": 4.8,
      "holy": 4.9
    },
    "resistances": {
      "immunity": 23,
      "robustness": 11,
      "focus": 39,
      "vitality": 44
    },
    "poise": 4,
    "effect": "What power remains within raises the potency of Lusat's primeval current sorceries at the cost of additional FP consumption",
    "statChanges": {
      "fpCost": 1.15
    },
    "weight": 3.6
  },
  {
    "id": "580100",
    "name": "Lusat's Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Lusat's_Robe.webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 6.1,
      "slash": 8,
      "pierce": 6.1,
      "magic": 15.4,
      "fire": 12.8,
      "lightning": 13.3,
      "holy": 13.5
    },
    "resistances": {
      "immunity": 50,
      "robustness": 25,
      "focus": 83,
      "vitality": 99
    },
    "poise": 12,
    "weight": 7.1
  },
  {
    "id": "580200",
    "name": "Lusat's Manchettes",
    "category": "Arms",
    "image": "/equipment_images/armours/Lusat's_Manchettes.webp",
    "dmgNegation": {
      "physical": 1.3,
      "strike": 0.1,
      "slash": 1.3,
      "pierce": 0.1,
      "magic": 3.4,
      "fire": 2.8,
      "lightning": 3.1,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 12,
      "robustness": 6,
      "focus": 20,
      "vitality": 22
    },
    "poise": 1,
    "weight": 1.1
  },
  {
    "id": "580300",
    "name": "Old Sorcerer's Legwraps",
    "category": "Legs",
    "image": "/equipment_images/armours/Old_Sorcerer's_Legwraps.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 1.5,
      "slash": 3.4,
      "pierce": 1.5,
      "magic": 8.1,
      "fire": 6.8,
      "lightning": 7.2,
      "holy": 7.3
    },
    "resistances": {
      "immunity": 24,
      "robustness": 13,
      "focus": 39,
      "vitality": 44
    },
    "poise": 4,
    "weight": 2.5
  },
  {
    "id": "581000",
    "name": "Azur's Glintstone Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Azur's_Glintstone_Crown.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 2.3,
      "slash": 2.5,
      "pierce": 2.5,
      "magic": 5.8,
      "fire": 4.6,
      "lightning": 4.7,
      "holy": 5
    },
    "resistances": {
      "immunity": 23,
      "robustness": 14,
      "focus": 44,
      "vitality": 39
    },
    "poise": 4,
    "effect": "What power remains within raises the potency of Azur's primeval current sorceries at the cost of additional FP consumption",
    "statChanges": {
      "fpCost": 1.15
    },
    "weight": 3.6
  },
  {
    "id": "581100",
    "name": "Azur's Glintstone Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Azur's_Glintstone_Robe.webp",
    "dmgNegation": {
      "physical": 7.1,
      "strike": 6.1,
      "slash": 6.7,
      "pierce": 6.7,
      "magic": 15.4,
      "fire": 12.8,
      "lightning": 13,
      "holy": 13.8
    },
    "resistances": {
      "immunity": 50,
      "robustness": 28,
      "focus": 99,
      "vitality": 83
    },
    "poise": 12,
    "weight": 7.1
  },
  {
    "id": "581200",
    "name": "Azur's Manchettes",
    "category": "Arms",
    "image": "/equipment_images/armours/Azur's_Manchettes.webp",
    "dmgNegation": {
      "physical": 1,
      "strike": 0.1,
      "slash": 0.6,
      "pierce": 0.6,
      "magic": 3.4,
      "fire": 2.8,
      "lightning": 2.9,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 12,
      "robustness": 8,
      "focus": 22,
      "vitality": 20
    },
    "poise": 1,
    "weight": 1.1
  },
  {
    "id": "590000",
    "name": "All-Knowing Helm",
    "category": "Head",
    "image": "/equipment_images/armours/All-Knowing_Helm.webp",
    "dmgNegation": {
      "physical": 4.6,
      "strike": 4.2,
      "slash": 4.8,
      "pierce": 4.2,
      "magic": 4.4,
      "fire": 3.4,
      "lightning": 3.6,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 12,
      "robustness": 20,
      "focus": 9,
      "vitality": 9
    },
    "poise": 7,
    "weight": 4.6
  },
  {
    "id": "590100",
    "name": "All-Knowing Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/All-Knowing_Armor.webp",
    "dmgNegation": {
      "physical": 12.9,
      "strike": 11.9,
      "slash": 13.5,
      "pierce": 11.9,
      "magic": 12.4,
      "fire": 9.5,
      "lightning": 10.2,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 28,
      "robustness": 46,
      "focus": 21,
      "vitality": 21
    },
    "poise": 22,
    "weight": 10.7
  },
  {
    "id": "590200",
    "name": "All-Knowing Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/All-Knowing_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.2,
      "strike": 2.9,
      "slash": 3.3,
      "pierce": 2.9,
      "magic": 3.1,
      "fire": 2.3,
      "lightning": 2.5,
      "holy": 2.1
    },
    "resistances": {
      "immunity": 9,
      "robustness": 15,
      "focus": 7,
      "vitality": 7
    },
    "poise": 5,
    "weight": 3.5
  },
  {
    "id": "590300",
    "name": "All-Knowing Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/All-Knowing_Greaves.webp",
    "dmgNegation": {
      "physical": 7.4,
      "strike": 6.8,
      "slash": 7.7,
      "pierce": 6.8,
      "magic": 7.1,
      "fire": 5.4,
      "lightning": 5.8,
      "holy": 5
    },
    "resistances": {
      "immunity": 17,
      "robustness": 29,
      "focus": 13,
      "vitality": 13
    },
    "poise": 13,
    "weight": 6.6
  },
  {
    "id": "591100",
    "name": "All-Knowing Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/All-Knowing_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 12.4,
      "strike": 10.9,
      "slash": 12.9,
      "pierce": 11.4,
      "magic": 11.4,
      "fire": 8.8,
      "lightning": 9.5,
      "holy": 8
    },
    "resistances": {
      "immunity": 22,
      "robustness": 38,
      "focus": 16,
      "vitality": 16
    },
    "poise": 21,
    "weight": 9.3
  },
  {
    "id": "600000",
    "name": "Twinned Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Twinned_Helm.webp",
    "dmgNegation": {
      "physical": 4.8,
      "strike": 4.4,
      "slash": 5.2,
      "pierce": 4.2,
      "magic": 4,
      "fire": 4,
      "lightning": 3.1,
      "holy": 3.6
    },
    "resistances": {
      "immunity": 14,
      "robustness": 23,
      "focus": 9,
      "vitality": 23
    },
    "poise": 7,
    "weight": 5.1
  },
  {
    "id": "600100",
    "name": "Twinned Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Twinned_Armor.webp",
    "dmgNegation": {
      "physical": 14.6,
      "strike": 13.4,
      "slash": 16,
      "pierce": 13.5,
      "magic": 12.4,
      "fire": 12.4,
      "lightning": 10.2,
      "holy": 11.4
    },
    "resistances": {
      "immunity": 38,
      "robustness": 60,
      "focus": 24,
      "vitality": 60
    },
    "poise": 25,
    "weight": 13.7
  },
  {
    "id": "600200",
    "name": "Twinned Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Twinned_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.3,
      "strike": 3.1,
      "slash": 3.6,
      "pierce": 2.9,
      "magic": 2.8,
      "fire": 2.8,
      "lightning": 2.1,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 11,
      "robustness": 18,
      "focus": 7,
      "vitality": 18
    },
    "poise": 5,
    "weight": 3.9
  },
  {
    "id": "600300",
    "name": "Twinned Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Twinned_Greaves.webp",
    "dmgNegation": {
      "physical": 7.7,
      "strike": 7.1,
      "slash": 8.4,
      "pierce": 6.8,
      "magic": 6.5,
      "fire": 6.5,
      "lightning": 5,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 20,
      "robustness": 34,
      "focus": 13,
      "vitality": 34
    },
    "poise": 13,
    "weight": 7.3
  },
  {
    "id": "601100",
    "name": "Twinned Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Twinned_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 14,
      "strike": 12.9,
      "slash": 15.3,
      "pierce": 12.9,
      "magic": 11.9,
      "fire": 11.9,
      "lightning": 9.5,
      "holy": 10.9
    },
    "resistances": {
      "immunity": 32,
      "robustness": 52,
      "focus": 21,
      "vitality": 52
    },
    "poise": 24,
    "weight": 12.8
  },
  {
    "id": "620000",
    "name": "Prophet Blindfold",
    "category": "Head",
    "image": "/equipment_images/armours/Prophet_Blindfold.webp",
    "dmgNegation": {
      "physical": 0.2,
      "strike": 0.9,
      "slash": 0.9,
      "pierce": 0.2,
      "magic": 4.5,
      "fire": 4.2,
      "lightning": 4,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 14,
      "robustness": 5,
      "focus": 27,
      "vitality": 27
    },
    "poise": 1,
    "weight": 1
  },
  {
    "id": "620100",
    "name": "Corhyn's Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Corhyn's_Robe.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 6.7,
      "slash": 6.7,
      "pierce": 6.1,
      "magic": 13.3,
      "fire": 12.8,
      "lightning": 12.8,
      "holy": 13.5
    },
    "resistances": {
      "immunity": 46,
      "robustness": 24,
      "focus": 107,
      "vitality": 76
    },
    "poise": 10,
    "weight": 6.3
  },
  {
    "id": "620300",
    "name": "Prophet Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Prophet_Trousers.webp",
    "dmgNegation": {
      "physical": 3,
      "strike": 3.4,
      "slash": 3.4,
      "pierce": 3,
      "magic": 7.6,
      "fire": 7.3,
      "lightning": 7.2,
      "holy": 7.6
    },
    "resistances": {
      "immunity": 26,
      "robustness": 14,
      "focus": 47,
      "vitality": 51
    },
    "poise": 3,
    "weight": 3.1
  },
  {
    "id": "621100",
    "name": "Prophet Robe (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Prophet_Robe_(Altered).webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 6.1,
      "slash": 5.3,
      "pierce": 6.1,
      "magic": 13.3,
      "fire": 12.4,
      "lightning": 12.8,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 38,
      "robustness": 22,
      "focus": 69,
      "vitality": 75
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "622100",
    "name": "Prophet Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Prophet_Robe.webp",
    "dmgNegation": {
      "physical": 6.7,
      "strike": 6.7,
      "slash": 6.1,
      "pierce": 6.7,
      "magic": 13.5,
      "fire": 12.6,
      "lightning": 13,
      "holy": 13
    },
    "resistances": {
      "immunity": 46,
      "robustness": 25,
      "focus": 83,
      "vitality": 90
    },
    "poise": 12,
    "weight": 6.3
  },
  {
    "id": "630000",
    "name": "Astrologer Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Astrologer_Hood.webp",
    "dmgNegation": {
      "physical": 1.8,
      "strike": 1.4,
      "slash": 1.4,
      "pierce": 1.4,
      "magic": 4.6,
      "fire": 4.5,
      "lightning": 4.6,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 18,
      "robustness": 9,
      "focus": 31,
      "vitality": 27
    },
    "poise": 3,
    "weight": 1.7
  },
  {
    "id": "630100",
    "name": "Astrologer Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Astrologer_Robe.webp",
    "dmgNegation": {
      "physical": 6.7,
      "strike": 6.1,
      "slash": 6.1,
      "pierce": 6.1,
      "magic": 13.5,
      "fire": 13,
      "lightning": 13.3,
      "holy": 13
    },
    "resistances": {
      "immunity": 50,
      "robustness": 24,
      "focus": 90,
      "vitality": 76
    },
    "poise": 12,
    "weight": 6.3
  },
  {
    "id": "630200",
    "name": "Astrologer Gloves",
    "category": "Arms",
    "image": "/equipment_images/armours/Astrologer_Gloves.webp",
    "dmgNegation": {
      "physical": 1.3,
      "strike": 1,
      "slash": 1,
      "pierce": 1,
      "magic": 3.2,
      "fire": 3.1,
      "lightning": 3.2,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 14,
      "robustness": 7,
      "focus": 24,
      "vitality": 21
    },
    "poise": 2,
    "weight": 1.4
  },
  {
    "id": "630300",
    "name": "Astrologer Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Astrologer_Trousers.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 3.4,
      "slash": 3.4,
      "pierce": 3.4,
      "magic": 7.7,
      "fire": 7.4,
      "lightning": 7.6,
      "holy": 7.4
    },
    "resistances": {
      "immunity": 31,
      "robustness": 15,
      "focus": 56,
      "vitality": 47
    },
    "poise": 7,
    "weight": 3.9
  },
  {
    "id": "631100",
    "name": "Astrologer Robe (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Astrologer_Robe_(Altered).webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 5.3,
      "slash": 5.3,
      "pierce": 5.3,
      "magic": 13.3,
      "fire": 12.8,
      "lightning": 13,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 42,
      "robustness": 21,
      "focus": 75,
      "vitality": 64
    },
    "poise": 10,
    "weight": 5.3
  },
  {
    "id": "640000",
    "name": "Lionel's Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Lionel's_Helm.webp",
    "dmgNegation": {
      "physical": 6.3,
      "strike": 5.9,
      "slash": 7,
      "pierce": 7.2,
      "magic": 4.8,
      "fire": 5.3,
      "lightning": 4.6,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 27,
      "robustness": 42,
      "focus": 18,
      "vitality": 22
    },
    "poise": 13,
    "weight": 9.1
  },
  {
    "id": "640100",
    "name": "Lionel's Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Lionel's_Armor.webp",
    "dmgNegation": {
      "physical": 17.5,
      "strike": 16.3,
      "slash": 19.2,
      "pierce": 19.7,
      "magic": 13.5,
      "fire": 14.9,
      "lightning": 13,
      "holy": 13.5
    },
    "resistances": {
      "immunity": 63,
      "robustness": 99,
      "focus": 42,
      "vitality": 50
    },
    "poise": 40,
    "weight": 21.2
  },
  {
    "id": "640200",
    "name": "Lionel's Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Lionel's_Gauntlets.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 4.1,
      "slash": 4.9,
      "pierce": 5,
      "magic": 3.3,
      "fire": 3.7,
      "lightning": 3.2,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 21,
      "robustness": 33,
      "focus": 14,
      "vitality": 17
    },
    "poise": 9,
    "weight": 7.1
  },
  {
    "id": "640300",
    "name": "Lionel's Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Lionel's_Greaves.webp",
    "dmgNegation": {
      "physical": 10.1,
      "strike": 9.4,
      "slash": 11.1,
      "pierce": 11.4,
      "magic": 7.7,
      "fire": 8.5,
      "lightning": 7.4,
      "holy": 7.7
    },
    "resistances": {
      "immunity": 39,
      "robustness": 61,
      "focus": 26,
      "vitality": 31
    },
    "poise": 24,
    "weight": 13.1
  },
  {
    "id": "641100",
    "name": "Lionel's Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Lionel's_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 17.1,
      "strike": 15.9,
      "slash": 18.8,
      "pierce": 19.3,
      "magic": 13.1,
      "fire": 14.5,
      "lightning": 12.6,
      "holy": 13.1
    },
    "resistances": {
      "immunity": 57,
      "robustness": 90,
      "focus": 38,
      "vitality": 45
    },
    "poise": 38,
    "weight": 20.2
  },
  {
    "id": "650000",
    "name": "Hoslow's Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Hoslow's_Helm.webp",
    "dmgNegation": {
      "physical": 5.2,
      "strike": 4.4,
      "slash": 5,
      "pierce": 4.8,
      "magic": 4,
      "fire": 4.4,
      "lightning": 3.8,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 18,
      "robustness": 27,
      "focus": 11,
      "vitality": 11
    },
    "poise": 8,
    "weight": 5.5
  },
  {
    "id": "650100",
    "name": "Hoslow's Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Hoslow's_Armor.webp",
    "dmgNegation": {
      "physical": 14,
      "strike": 11.9,
      "slash": 13.5,
      "pierce": 12.4,
      "magic": 10.9,
      "fire": 11.9,
      "lightning": 10.2,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 38,
      "robustness": 60,
      "focus": 24,
      "vitality": 24
    },
    "poise": 22,
    "weight": 11.8
  },
  {
    "id": "650200",
    "name": "Hoslow's Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Hoslow's_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.5,
      "strike": 2.9,
      "slash": 3.3,
      "pierce": 3.1,
      "magic": 2.7,
      "fire": 2.9,
      "lightning": 2.5,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 13,
      "robustness": 20,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.9
  },
  {
    "id": "650300",
    "name": "Hoslow's Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Hoslow's_Greaves.webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 6.8,
      "slash": 7.7,
      "pierce": 7.1,
      "magic": 6.2,
      "fire": 6.8,
      "lightning": 5.8,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 24,
      "robustness": 37,
      "focus": 15,
      "vitality": 15
    },
    "poise": 13,
    "weight": 7.3
  },
  {
    "id": "651000",
    "name": "Diallos's Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Diallos's_Mask.webp",
    "dmgNegation": {
      "physical": 4.8,
      "strike": 3.8,
      "slash": 4.6,
      "pierce": 4.4,
      "magic": 3.6,
      "fire": 3.6,
      "lightning": 2.5,
      "holy": 3.4
    },
    "resistances": {
      "immunity": 15,
      "robustness": 23,
      "focus": 10,
      "vitality": 10
    },
    "poise": 7,
    "weight": 4.6
  },
  {
    "id": "652100",
    "name": "Hoslow's Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Hoslow's_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 13.6,
      "strike": 11.5,
      "slash": 12.5,
      "pierce": 12,
      "magic": 10.3,
      "fire": 11,
      "lightning": 8.9,
      "holy": 8.9
    },
    "resistances": {
      "immunity": 32,
      "robustness": 52,
      "focus": 21,
      "vitality": 21
    },
    "poise": 21,
    "weight": 10.8
  },
  {
    "id": "660000",
    "name": "Vagabond Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Vagabond_Knight_Helm.webp",
    "dmgNegation": {
      "physical": 4.6,
      "strike": 3.6,
      "slash": 4.2,
      "pierce": 4,
      "magic": 3.1,
      "fire": 3.6,
      "lightning": 2.8,
      "holy": 2.8
    },
    "resistances": {
      "immunity": 14,
      "robustness": 23,
      "focus": 9,
      "vitality": 9
    },
    "poise": 7,
    "weight": 4
  },
  {
    "id": "660100",
    "name": "Vagabond Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Vagabond_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 11.4,
      "slash": 12.4,
      "pierce": 11.9,
      "magic": 10.2,
      "fire": 10.9,
      "lightning": 8.8,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 35,
      "robustness": 57,
      "focus": 23,
      "vitality": 23
    },
    "poise": 22,
    "weight": 10.6
  },
  {
    "id": "660200",
    "name": "Vagabond Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Vagabond_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.3,
      "strike": 2.8,
      "slash": 3.1,
      "pierce": 2.9,
      "magic": 2.5,
      "fire": 2.7,
      "lightning": 2.1,
      "holy": 2.1
    },
    "resistances": {
      "immunity": 12,
      "robustness": 19,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.5
  },
  {
    "id": "660300",
    "name": "Vagabond Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Vagabond_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 7.4,
      "strike": 5.8,
      "slash": 6.8,
      "pierce": 6.5,
      "magic": 5,
      "fire": 5.8,
      "lightning": 4.5,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 20,
      "robustness": 34,
      "focus": 13,
      "vitality": 13
    },
    "poise": 12,
    "weight": 5.7
  },
  {
    "id": "661100",
    "name": "Vagabond Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Vagabond_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 13.2,
      "strike": 10.5,
      "slash": 12.2,
      "pierce": 11.7,
      "magic": 9.1,
      "fire": 10.5,
      "lightning": 8.3,
      "holy": 8.3
    },
    "resistances": {
      "immunity": 29,
      "robustness": 50,
      "focus": 19,
      "vitality": 19
    },
    "poise": 21,
    "weight": 9.6
  },
  {
    "id": "670000",
    "name": "Blue Cloth Cowl",
    "category": "Head",
    "image": "/equipment_images/armours/Blue_Cloth_Cowl.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 2.8,
      "slash": 2.3,
      "pierce": 2.3,
      "magic": 3.1,
      "fire": 3.4,
      "lightning": 3.8,
      "holy": 2.8
    },
    "resistances": {
      "immunity": 24,
      "robustness": 15,
      "focus": 18,
      "vitality": 18
    },
    "poise": 4,
    "weight": 2.7
  },
  {
    "id": "670100",
    "name": "Blue Cloth Vest",
    "category": "Chest",
    "image": "/equipment_images/armours/Blue_Cloth_Vest.webp",
    "dmgNegation": {
      "physical": 9.5,
      "strike": 9.5,
      "slash": 8,
      "pierce": 8,
      "magic": 10.2,
      "fire": 10.9,
      "lightning": 11.9,
      "holy": 9.5
    },
    "resistances": {
      "immunity": 63,
      "robustness": 42,
      "focus": 50,
      "vitality": 50
    },
    "poise": 16,
    "weight": 7.7
  },
  {
    "id": "670200",
    "name": "Warrior Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Warrior_Gauntlets.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 2.3,
      "slash": 1.9,
      "pierce": 1.9,
      "magic": 2.5,
      "fire": 2.7,
      "lightning": 2.9,
      "holy": 2.3
    },
    "resistances": {
      "immunity": 21,
      "robustness": 14,
      "focus": 17,
      "vitality": 17
    },
    "poise": 3,
    "weight": 2.6
  },
  {
    "id": "670300",
    "name": "Warrior Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Warrior_Greaves.webp",
    "dmgNegation": {
      "physical": 5.4,
      "strike": 5.4,
      "slash": 4.5,
      "pierce": 4.5,
      "magic": 5.8,
      "fire": 6.2,
      "lightning": 6.8,
      "holy": 5.4
    },
    "resistances": {
      "immunity": 39,
      "robustness": 26,
      "focus": 31,
      "vitality": 31
    },
    "poise": 10,
    "weight": 4.8
  },
  {
    "id": "680000",
    "name": "White Mask",
    "category": "Head",
    "image": "/equipment_images/armours/White_Mask.webp",
    "dmgNegation": {
      "physical": 2.7,
      "strike": 3,
      "slash": 3.3,
      "pierce": 2.7,
      "magic": 3.5,
      "fire": 3.7,
      "lightning": 3.9,
      "holy": 3.7
    },
    "resistances": {
      "immunity": 23,
      "robustness": 18,
      "focus": 21,
      "vitality": 22
    },
    "poise": 5,
    "effect": "Slightly raises attack power when there is blood loss nearby",
    "weight": 3.2
  },
  {
    "id": "680100",
    "name": "War Surgeon Gown",
    "category": "Chest",
    "image": "/equipment_images/armours/War_Surgeon_Gown.webp",
    "dmgNegation": {
      "physical": 7,
      "strike": 7.9,
      "slash": 8.7,
      "pierce": 7,
      "magic": 9.4,
      "fire": 10.1,
      "lightning": 10.8,
      "holy": 10.1
    },
    "resistances": {
      "immunity": 53,
      "robustness": 37,
      "focus": 44,
      "vitality": 48
    },
    "poise": 13,
    "weight": 6.9
  },
  {
    "id": "680200",
    "name": "War Surgeon Gloves",
    "category": "Arms",
    "image": "/equipment_images/armours/War_Surgeon_Gloves.webp",
    "dmgNegation": {
      "physical": 1.6,
      "strike": 1.8,
      "slash": 2,
      "pierce": 1.6,
      "magic": 2.2,
      "fire": 2.4,
      "lightning": 2.6,
      "holy": 2.4
    },
    "resistances": {
      "immunity": 18,
      "robustness": 13,
      "focus": 15,
      "vitality": 17
    },
    "poise": 3,
    "weight": 2.3
  },
  {
    "id": "680300",
    "name": "War Surgeon Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/War_Surgeon_Trousers.webp",
    "dmgNegation": {
      "physical": 3.9,
      "strike": 4.4,
      "slash": 4.9,
      "pierce": 3.9,
      "magic": 5.3,
      "fire": 5.7,
      "lightning": 6.1,
      "holy": 5.7
    },
    "resistances": {
      "immunity": 33,
      "robustness": 23,
      "focus": 28,
      "vitality": 31
    },
    "poise": 8,
    "weight": 4.2
  },
  {
    "id": "681100",
    "name": "War Surgeon Gown (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/War_Surgeon_Gown_(Altered).webp",
    "dmgNegation": {
      "physical": 6.6,
      "strike": 7,
      "slash": 7.9,
      "pierce": 6.6,
      "magic": 8.7,
      "fire": 9.4,
      "lightning": 10.1,
      "holy": 9.4
    },
    "resistances": {
      "immunity": 45,
      "robustness": 32,
      "focus": 38,
      "vitality": 42
    },
    "poise": 12,
    "weight": 6.1
  },
  {
    "id": "690000",
    "name": "Royal Remains Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Royal_Remains_Helm.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 4,
      "slash": 4.6,
      "pierce": 4.2,
      "magic": 3.4,
      "fire": 3.6,
      "lightning": 2.8,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 15,
      "robustness": 24,
      "focus": 10,
      "vitality": 5
    },
    "poise": 7,
    "effect": "Slowly replenishes HP when HP is reduced",
    "weight": 4.6
  },
  {
    "id": "690100",
    "name": "Royal Remains Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Royal_Remains_Armor.webp",
    "dmgNegation": {
      "physical": 11.9,
      "strike": 11.4,
      "slash": 12.9,
      "pierce": 11.9,
      "magic": 9.5,
      "fire": 10.2,
      "lightning": 8,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 35,
      "robustness": 57,
      "focus": 24,
      "vitality": 11
    },
    "poise": 21,
    "effect": "Slowly replenishes HP when HP is reduced",
    "weight": 10.6
  },
  {
    "id": "690200",
    "name": "Royal Remains Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Royal_Remains_Gauntlets.webp",
    "dmgNegation": {
      "physical": 2.9,
      "strike": 2.8,
      "slash": 3.2,
      "pierce": 2.9,
      "magic": 2.3,
      "fire": 2.5,
      "lightning": 1.9,
      "holy": 2.1
    },
    "resistances": {
      "immunity": 12,
      "robustness": 19,
      "focus": 8,
      "vitality": 4
    },
    "poise": 4,
    "effect": "Slowly replenishes HP when HP is reduced",
    "weight": 3.5
  },
  {
    "id": "690300",
    "name": "Royal Remains Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Royal_Remains_Greaves.webp",
    "dmgNegation": {
      "physical": 6.8,
      "strike": 6.5,
      "slash": 7.4,
      "pierce": 6.8,
      "magic": 5.4,
      "fire": 5.8,
      "lightning": 4.5,
      "holy": 5
    },
    "resistances": {
      "immunity": 22,
      "robustness": 35,
      "focus": 15,
      "vitality": 7
    },
    "poise": 12,
    "effect": "Slowly replenishes HP when HP is reduced",
    "weight": 6.6
  },
  {
    "id": "720000",
    "name": "Beast Champion Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Beast_Champion_Helm.webp",
    "dmgNegation": {
      "physical": 6.3,
      "strike": 5.9,
      "slash": 6.8,
      "pierce": 6.7,
      "magic": 4.6,
      "fire": 4.9,
      "lightning": 4.6,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 24,
      "robustness": 39,
      "focus": 18,
      "vitality": 16
    },
    "poise": 11,
    "weight": 7.5
  },
  {
    "id": "720100",
    "name": "Beast Champion Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Beast_Champion_Armor.webp",
    "dmgNegation": {
      "physical": 17.5,
      "strike": 16.3,
      "slash": 18.7,
      "pierce": 18.3,
      "magic": 13,
      "fire": 13.8,
      "lightning": 12.8,
      "holy": 13.5
    },
    "resistances": {
      "immunity": 57,
      "robustness": 90,
      "focus": 42,
      "vitality": 38
    },
    "poise": 34,
    "weight": 17.5
  },
  {
    "id": "720200",
    "name": "Beast Champion Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Beast_Champion_Gauntlets.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 4.1,
      "slash": 4.7,
      "pierce": 4.6,
      "magic": 3.2,
      "fire": 3.4,
      "lightning": 3.2,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 19,
      "robustness": 30,
      "focus": 14,
      "vitality": 13
    },
    "poise": 7,
    "weight": 5.8
  },
  {
    "id": "720300",
    "name": "Beast Champion Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Beast_Champion_Greaves.webp",
    "dmgNegation": {
      "physical": 10.1,
      "strike": 9.4,
      "slash": 10.8,
      "pierce": 10.6,
      "magic": 7.4,
      "fire": 7.9,
      "lightning": 7.3,
      "holy": 7.7
    },
    "resistances": {
      "immunity": 35,
      "robustness": 56,
      "focus": 26,
      "vitality": 24
    },
    "poise": 20,
    "weight": 10.8
  },
  {
    "id": "721100",
    "name": "Beast Champion Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Beast_Champion_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 17.2,
      "strike": 15.9,
      "slash": 18.5,
      "pierce": 18.2,
      "magic": 12.9,
      "fire": 13.7,
      "lightning": 12.7,
      "holy": 13.4
    },
    "resistances": {
      "immunity": 50,
      "robustness": 75,
      "focus": 34,
      "vitality": 32
    },
    "poise": 34,
    "weight": 16.4
  },
  {
    "id": "730000",
    "name": "Champion Headband",
    "category": "Head",
    "image": "/equipment_images/armours/Champion_Headband.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 3.1,
      "slash": 2.5,
      "pierce": 2.8,
      "magic": 2.8,
      "fire": 3.4,
      "lightning": 3.6,
      "holy": 3.4
    },
    "resistances": {
      "immunity": 22,
      "robustness": 14,
      "focus": 18,
      "vitality": 16
    },
    "poise": 5,
    "weight": 2.7
  },
  {
    "id": "730100",
    "name": "Champion Pauldron",
    "category": "Chest",
    "image": "/equipment_images/armours/Champion_Pauldron.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 8,
      "slash": 6.7,
      "pierce": 7.1,
      "magic": 7.1,
      "fire": 8.8,
      "lightning": 9.5,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 46,
      "robustness": 28,
      "focus": 38,
      "vitality": 35
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "730200",
    "name": "Champion Bracers",
    "category": "Arms",
    "image": "/equipment_images/armours/Champion_Bracers.webp",
    "dmgNegation": {
      "physical": 1.6,
      "strike": 2.1,
      "slash": 1.7,
      "pierce": 1.9,
      "magic": 1.9,
      "fire": 2.3,
      "lightning": 2.5,
      "holy": 2.3
    },
    "resistances": {
      "immunity": 17,
      "robustness": 11,
      "focus": 14,
      "vitality": 13
    },
    "poise": 3,
    "weight": 2.1
  },
  {
    "id": "730300",
    "name": "Champion Gaiters",
    "category": "Legs",
    "image": "/equipment_images/armours/Champion_Gaiters.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 5,
      "slash": 4,
      "pierce": 4.5,
      "magic": 4.5,
      "fire": 5.4,
      "lightning": 5.8,
      "holy": 5.4
    },
    "resistances": {
      "immunity": 31,
      "robustness": 20,
      "focus": 26,
      "vitality": 24
    },
    "poise": 4,
    "weight": 3.9
  },
  {
    "id": "740000",
    "name": "Crimson Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Crimson_Hood.webp",
    "dmgNegation": {
      "physical": 1.4,
      "strike": 1.8,
      "slash": 1.4,
      "pierce": 1.8,
      "magic": 4.6,
      "fire": 4.6,
      "lightning": 4.5,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 16,
      "robustness": 9,
      "focus": 27,
      "vitality": 29
    },
    "poise": 3,
    "effect": "Increases vigor",
    "statChanges": {
      "vigor": 1
    },
    "weight": 1.7
  },
  {
    "id": "740100",
    "name": "Noble's Traveling Garb",
    "category": "Chest",
    "image": "/equipment_images/armours/Noble's_Traveling_Garb.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 6.7,
      "slash": 6.1,
      "pierce": 6.7,
      "magic": 13.3,
      "fire": 13.5,
      "lightning": 13,
      "holy": 13.3
    },
    "resistances": {
      "immunity": 46,
      "robustness": 24,
      "focus": 76,
      "vitality": 83
    },
    "poise": 10,
    "weight": 6.3
  },
  {
    "id": "740200",
    "name": "Noble's Gloves",
    "category": "Arms",
    "image": "/equipment_images/armours/Noble's_Gloves.webp",
    "dmgNegation": {
      "physical": 1.5,
      "strike": 1.6,
      "slash": 1.5,
      "pierce": 1.6,
      "magic": 3.3,
      "fire": 3.3,
      "lightning": 3.2,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 15,
      "robustness": 8,
      "focus": 25,
      "vitality": 28
    },
    "poise": 2,
    "weight": 2.1
  },
  {
    "id": "740300",
    "name": "Noble's Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Noble's_Trousers.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3.8,
      "slash": 3.4,
      "pierce": 3.8,
      "magic": 7.6,
      "fire": 7.7,
      "lightning": 7.4,
      "holy": 7.6
    },
    "resistances": {
      "immunity": 29,
      "robustness": 15,
      "focus": 47,
      "vitality": 51
    },
    "poise": 6,
    "weight": 3.9
  },
  {
    "id": "741000",
    "name": "Navy Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Navy_Hood.webp",
    "dmgNegation": {
      "physical": 1.4,
      "strike": 2.1,
      "slash": 1.8,
      "pierce": 0.9,
      "magic": 4.6,
      "fire": 4.7,
      "lightning": 4.4,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 20,
      "robustness": 10,
      "focus": 29,
      "vitality": 27
    },
    "poise": 3,
    "effect": "Increases mind",
    "statChanges": {
      "mind": 1
    },
    "weight": 1.7
  },
  {
    "id": "760000",
    "name": "Maliketh's Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Maliketh's_Helm.webp",
    "dmgNegation": {
      "physical": 4.8,
      "strike": 4.2,
      "slash": 5,
      "pierce": 4.8,
      "magic": 3.8,
      "fire": 4,
      "lightning": 3.4,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 15,
      "robustness": 24,
      "focus": 10,
      "vitality": 22
    },
    "poise": 8,
    "weight": 5.5
  },
  {
    "id": "760100",
    "name": "Maliketh's Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Maliketh's_Armor.webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 11.9,
      "slash": 14,
      "pierce": 13.5,
      "magic": 10.9,
      "fire": 11.4,
      "lightning": 9.5,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 35,
      "robustness": 57,
      "focus": 24,
      "vitality": 50
    },
    "poise": 24,
    "weight": 12.8
  },
  {
    "id": "760200",
    "name": "Maliketh's Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Maliketh's_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.3,
      "strike": 2.9,
      "slash": 3.5,
      "pierce": 3.3,
      "magic": 2.7,
      "fire": 2.8,
      "lightning": 2.3,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 12,
      "robustness": 19,
      "focus": 8,
      "vitality": 17
    },
    "poise": 5,
    "weight": 4.3
  },
  {
    "id": "760300",
    "name": "Maliketh's Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Maliketh's_Greaves.webp",
    "dmgNegation": {
      "physical": 7.7,
      "strike": 6.8,
      "slash": 8,
      "pierce": 7.7,
      "magic": 6.2,
      "fire": 6.5,
      "lightning": 5.4,
      "holy": 7.3
    },
    "resistances": {
      "immunity": 22,
      "robustness": 35,
      "focus": 15,
      "vitality": 31
    },
    "poise": 14,
    "weight": 7.9
  },
  {
    "id": "761100",
    "name": "Maliketh's Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Maliketh's_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 12.9,
      "strike": 11.4,
      "slash": 13.5,
      "pierce": 12.4,
      "magic": 10.2,
      "fire": 10.9,
      "lightning": 8.8,
      "holy": 12.6
    },
    "resistances": {
      "immunity": 29,
      "robustness": 50,
      "focus": 21,
      "vitality": 42
    },
    "poise": 22,
    "weight": 11.8
  },
  {
    "id": "770000",
    "name": "Malenia's Winged Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Malenia's_Winged_Helm.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.4,
      "slash": 4.6,
      "pierce": 4,
      "magic": 2.8,
      "fire": 3.4,
      "lightning": 2.3,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 22,
      "robustness": 18,
      "focus": 8,
      "vitality": 8
    },
    "poise": 6,
    "weight": 4
  },
  {
    "id": "770100",
    "name": "Malenia's Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Malenia's_Armor.webp",
    "dmgNegation": {
      "physical": 10.9,
      "strike": 7.1,
      "slash": 11.4,
      "pierce": 9.5,
      "magic": 6.1,
      "fire": 7.1,
      "lightning": 4.2,
      "holy": 7.1
    },
    "resistances": {
      "immunity": 38,
      "robustness": 32,
      "focus": 11,
      "vitality": 11
    },
    "poise": 16,
    "weight": 7.7
  },
  {
    "id": "770200",
    "name": "Malenia's Gauntlet",
    "category": "Arms",
    "image": "/equipment_images/armours/Malenia's_Gauntlet.webp",
    "dmgNegation": {
      "physical": 3.1,
      "strike": 2.3,
      "slash": 3.2,
      "pierce": 2.8,
      "magic": 1.9,
      "fire": 2.3,
      "lightning": 1.6,
      "holy": 2.7
    },
    "resistances": {
      "immunity": 17,
      "robustness": 14,
      "focus": 6,
      "vitality": 6
    },
    "poise": 4,
    "weight": 3.1
  },
  {
    "id": "770300",
    "name": "Malenia's Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Malenia's_Greaves.webp",
    "dmgNegation": {
      "physical": 7.1,
      "strike": 5.4,
      "slash": 7.4,
      "pierce": 6.5,
      "magic": 4.5,
      "fire": 5.4,
      "lightning": 3.8,
      "holy": 6.2
    },
    "resistances": {
      "immunity": 31,
      "robustness": 26,
      "focus": 11,
      "vitality": 11
    },
    "poise": 11,
    "weight": 5.7
  },
  {
    "id": "771100",
    "name": "Malenia's Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Malenia's_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 10,
      "strike": 6.5,
      "slash": 10.7,
      "pierce": 8.6,
      "magic": 5.1,
      "fire": 6.5,
      "lightning": 2.5,
      "holy": 6.5
    },
    "resistances": {
      "immunity": 29,
      "robustness": 25,
      "focus": 0,
      "vitality": 0
    },
    "poise": 13,
    "weight": 6.8
  },
  {
    "id": "780000",
    "name": "Veteran's Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Veteran's_Helm.webp",
    "dmgNegation": {
      "physical": 6.8,
      "strike": 6.1,
      "slash": 6.8,
      "pierce": 6.3,
      "magic": 4.8,
      "fire": 5,
      "lightning": 4.6,
      "holy": 4.7
    },
    "resistances": {
      "immunity": 27,
      "robustness": 39,
      "focus": 20,
      "vitality": 20
    },
    "poise": 12,
    "weight": 8.1
  },
  {
    "id": "780100",
    "name": "Veteran's Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Veteran's_Armor.webp",
    "dmgNegation": {
      "physical": 18.7,
      "strike": 17,
      "slash": 18.7,
      "pierce": 17.5,
      "magic": 13.5,
      "fire": 14.1,
      "lightning": 12.8,
      "holy": 13.3
    },
    "resistances": {
      "immunity": 63,
      "robustness": 90,
      "focus": 46,
      "vitality": 46
    },
    "poise": 38,
    "weight": 18.9
  },
  {
    "id": "780200",
    "name": "Veteran's Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Veteran's_Gauntlets.webp",
    "dmgNegation": {
      "physical": 4.7,
      "strike": 4.3,
      "slash": 4.7,
      "pierce": 4.4,
      "magic": 3.3,
      "fire": 3.5,
      "lightning": 3.2,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 21,
      "robustness": 30,
      "focus": 15,
      "vitality": 15
    },
    "poise": 8,
    "weight": 6.3
  },
  {
    "id": "780300",
    "name": "Veteran's Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Veteran's_Greaves.webp",
    "dmgNegation": {
      "physical": 10.8,
      "strike": 9.8,
      "slash": 10.8,
      "pierce": 10.1,
      "magic": 7.7,
      "fire": 8.1,
      "lightning": 7.3,
      "holy": 7.6
    },
    "resistances": {
      "immunity": 39,
      "robustness": 56,
      "focus": 29,
      "vitality": 29
    },
    "poise": 22,
    "weight": 11.7
  },
  {
    "id": "781100",
    "name": "Veteran's Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Veteran's_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 18.1,
      "strike": 16.8,
      "slash": 18.5,
      "pierce": 17.3,
      "magic": 13.1,
      "fire": 13.6,
      "lightning": 12.4,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 54,
      "robustness": 75,
      "focus": 38,
      "vitality": 38
    },
    "poise": 35,
    "weight": 17.2
  },
  {
    "id": "790000",
    "name": "Bloodhound Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Bloodhound_Knight_Helm.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 4,
      "slash": 5,
      "pierce": 4.8,
      "magic": 3.4,
      "fire": 3.6,
      "lightning": 2.5,
      "holy": 3.6
    },
    "resistances": {
      "immunity": 14,
      "robustness": 22,
      "focus": 10,
      "vitality": 10
    },
    "poise": 6,
    "weight": 4.6
  },
  {
    "id": "790100",
    "name": "Bloodhound Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Bloodhound_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 12.4,
      "strike": 11.4,
      "slash": 14,
      "pierce": 13.5,
      "magic": 9.5,
      "fire": 10.2,
      "lightning": 7.1,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 32,
      "robustness": 50,
      "focus": 23,
      "vitality": 23
    },
    "poise": 19,
    "weight": 10.6
  },
  {
    "id": "790200",
    "name": "Bloodhound Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Bloodhound_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.1,
      "strike": 2.8,
      "slash": 3.5,
      "pierce": 3.3,
      "magic": 2.3,
      "fire": 2.5,
      "lightning": 1.7,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 11,
      "robustness": 17,
      "focus": 8,
      "vitality": 8
    },
    "poise": 4,
    "weight": 3.5
  },
  {
    "id": "790300",
    "name": "Bloodhound Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Bloodhound_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 7.1,
      "strike": 6.5,
      "slash": 8,
      "pierce": 7.7,
      "magic": 5.4,
      "fire": 5.8,
      "lightning": 4,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 20,
      "robustness": 31,
      "focus": 14,
      "vitality": 14
    },
    "poise": 11,
    "weight": 6.6
  },
  {
    "id": "791100",
    "name": "Bloodhound Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Bloodhound_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 12.1,
      "strike": 11.1,
      "slash": 13.7,
      "pierce": 13.2,
      "magic": 9.2,
      "fire": 9.9,
      "lightning": 6.8,
      "holy": 9.9
    },
    "resistances": {
      "immunity": 29,
      "robustness": 45,
      "focus": 21,
      "vitality": 21
    },
    "poise": 19,
    "weight": 9.6
  },
  {
    "id": "800000",
    "name": "Festive Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Festive_Hood.webp",
    "dmgNegation": {
      "physical": 1.4,
      "strike": 1.8,
      "slash": 2.1,
      "pierce": 1.8,
      "magic": 4.5,
      "fire": 4.2,
      "lightning": 4.4,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 18,
      "robustness": 9,
      "focus": 29,
      "vitality": 29
    },
    "poise": 2,
    "weight": 1.7
  },
  {
    "id": "800100",
    "name": "Festive Garb",
    "category": "Chest",
    "image": "/equipment_images/armours/Festive_Garb.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 5.3,
      "slash": 6.1,
      "pierce": 5.3,
      "magic": 12.6,
      "fire": 11.9,
      "lightning": 12.4,
      "holy": 13
    },
    "resistances": {
      "immunity": 42,
      "robustness": 21,
      "focus": 67,
      "vitality": 67
    },
    "poise": 7,
    "weight": 4.1
  },
  {
    "id": "801000",
    "name": "Festive Hood (Altered)",
    "category": "Head",
    "image": "/equipment_images/armours/Festive_Hood_(Altered).webp",
    "dmgNegation": {
      "physical": 0.2,
      "strike": 0.9,
      "slash": 1.4,
      "pierce": 0.9,
      "magic": 4.2,
      "fire": 3.8,
      "lightning": 4,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 13,
      "robustness": 4,
      "focus": 23,
      "vitality": 23
    },
    "poise": 1,
    "weight": 1
  },
  {
    "id": "801100",
    "name": "Festive Garb (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Festive_Garb_(Altered).webp",
    "dmgNegation": {
      "physical": 2.7,
      "strike": 4.2,
      "slash": 5.3,
      "pierce": 4.2,
      "magic": 12.4,
      "fire": 11.4,
      "lightning": 11.9,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 34,
      "robustness": 16,
      "focus": 57,
      "vitality": 57
    },
    "poise": 7,
    "weight": 3.2
  },
  {
    "id": "802000",
    "name": "Blue Festive Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Blue_Festive_Hood.webp",
    "dmgNegation": {
      "physical": 1.4,
      "strike": 1.4,
      "slash": 2.1,
      "pierce": 1.8,
      "magic": 4.5,
      "fire": 4,
      "lightning": 4.5,
      "holy": 4.9
    },
    "resistances": {
      "immunity": 20,
      "robustness": 9,
      "focus": 31,
      "vitality": 27
    },
    "poise": 2,
    "weight": 1.7
  },
  {
    "id": "802100",
    "name": "Blue Festive Garb",
    "category": "Chest",
    "image": "/equipment_images/armours/Blue_Festive_Garb.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 4.2,
      "slash": 6.1,
      "pierce": 5.3,
      "magic": 12.6,
      "fire": 11.4,
      "lightning": 12.6,
      "holy": 13.8
    },
    "resistances": {
      "immunity": 46,
      "robustness": 21,
      "focus": 71,
      "vitality": 63
    },
    "poise": 7,
    "weight": 4.1
  },
  {
    "id": "810000",
    "name": "Commoner's Headband",
    "category": "Head",
    "image": "/equipment_images/armours/Commoner's_Headband.webp",
    "dmgNegation": {
      "physical": 0.9,
      "strike": 1.8,
      "slash": 1.8,
      "pierce": 1.4,
      "magic": 4.4,
      "fire": 4,
      "lightning": 4.2,
      "holy": 4.4
    },
    "resistances": {
      "immunity": 15,
      "robustness": 10,
      "focus": 27,
      "vitality": 29
    },
    "poise": 2,
    "weight": 1.4
  },
  {
    "id": "810100",
    "name": "Commoner's Garb",
    "category": "Chest",
    "image": "/equipment_images/armours/Commoner's_Garb.webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 6.7,
      "slash": 6.7,
      "pierce": 6.1,
      "magic": 12.8,
      "fire": 12.4,
      "lightning": 12.6,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 42,
      "robustness": 25,
      "focus": 76,
      "vitality": 83
    },
    "poise": 8,
    "effect": "This is a self-imposed shackle, a voluntary display of allegiance to the Erdtree that increases faith",
    "statChanges": {
      "faith": 1
    },
    "weight": 5.1
  },
  {
    "id": "810300",
    "name": "Commoner's Shoes",
    "category": "Legs",
    "image": "/equipment_images/armours/Commoner's_Shoes.webp",
    "dmgNegation": {
      "physical": 1.5,
      "strike": 3,
      "slash": 3,
      "pierce": 2.3,
      "magic": 7.1,
      "fire": 6.5,
      "lightning": 6.8,
      "holy": 7.1
    },
    "resistances": {
      "immunity": 22,
      "robustness": 14,
      "focus": 39,
      "vitality": 41
    },
    "poise": 3,
    "weight": 2
  },
  {
    "id": "811000",
    "name": "Commoner's Headband (Altered)",
    "category": "Head",
    "image": "/equipment_images/armours/Commoner's_Headband_(Altered).webp",
    "dmgNegation": {
      "physical": 0.1,
      "strike": 1.1,
      "slash": 1.1,
      "pierce": 0.6,
      "magic": 3.9,
      "fire": 3.5,
      "lightning": 3.7,
      "holy": 3.9
    },
    "resistances": {
      "immunity": 12,
      "robustness": 8,
      "focus": 23,
      "vitality": 24
    },
    "poise": 1,
    "weight": 0.7
  },
  {
    "id": "811100",
    "name": "Commoner's Garb (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Commoner's_Garb_(Altered).webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 6.1,
      "slash": 6.1,
      "pierce": 5.3,
      "magic": 12.6,
      "fire": 11.9,
      "lightning": 12.4,
      "holy": 12.6
    },
    "resistances": {
      "immunity": 34,
      "robustness": 21,
      "focus": 61,
      "vitality": 64
    },
    "poise": 7,
    "effect": "This is a self-imposed shackle, a voluntary display of allegiance to the Erdtree that increases faith",
    "statChanges": {
      "faith": 1
    },
    "weight": 4.1
  },
  {
    "id": "812000",
    "name": "Commoner's Simple Garb",
    "category": "Chest",
    "image": "/equipment_images/armours/Commoner's_Simple_Garb.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 6.7,
      "slash": 6.7,
      "pierce": 6.1,
      "magic": 13,
      "fire": 12.6,
      "lightning": 12.6,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 46,
      "robustness": 24,
      "focus": 76,
      "vitality": 83
    },
    "poise": 8,
    "effect": "This is a self-imposed shackle, a voluntary display of allegiance to the Erdtree that increases faith",
    "statChanges": {
      "faith": 1
    },
    "weight": 5.1
  },
  {
    "id": "812100",
    "name": "Commoner's Simple Garb (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Commoner's_Simple_Garb_(Altered).webp",
    "dmgNegation": {
      "physical": 3.2,
      "strike": 6.1,
      "slash": 6.1,
      "pierce": 5.3,
      "magic": 12.8,
      "fire": 12.4,
      "lightning": 12.4,
      "holy": 12.6
    },
    "resistances": {
      "immunity": 38,
      "robustness": 21,
      "focus": 61,
      "vitality": 64
    },
    "poise": 7,
    "effect": "This is a self-imposed shackle, a voluntary display of allegiance to the Erdtree that increases faith",
    "statChanges": {
      "faith": 1
    },
    "weight": 4.1
  },
  {
    "id": "820000",
    "name": "Envoy Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Envoy_Crown.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 3.1,
      "slash": 3.1,
      "pierce": 2.8,
      "magic": 5.3,
      "fire": 4.7,
      "lightning": 4.9,
      "holy": 5.5
    },
    "resistances": {
      "immunity": 27,
      "robustness": 15,
      "focus": 46,
      "vitality": 46
    },
    "poise": 4,
    "effect": "Raises the potency of bubble-based skills",
    "weight": 3.8
  },
  {
    "id": "830000",
    "name": "Twinsage Glintstone Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Twinsage_Glintstone_Crown.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.1,
      "slash": 5.2,
      "pierce": 4.8,
      "magic": 4.4,
      "fire": 4.5,
      "lightning": 3.4,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 16,
      "robustness": 26,
      "focus": 10,
      "vitality": 10
    },
    "poise": 6,
    "effect": "Greatly increases intelligence to the detriment of HP and stamina",
    "statChanges": {
      "maxHp": 0.91,
      "maxStamina": 0.91,
      "intelligence": 6
    },
    "weight": 5.1
  },
  {
    "id": "830100",
    "name": "Raya Lucarian Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Raya_Lucarian_Robe.webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 6.1,
      "slash": 6.1,
      "pierce": 2.7,
      "magic": 13.5,
      "fire": 12.6,
      "lightning": 12.4,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 42,
      "robustness": 18,
      "focus": 67,
      "vitality": 63
    },
    "poise": 7,
    "weight": 4.1
  },
  {
    "id": "830200",
    "name": "Sorcerer Manchettes",
    "category": "Arms",
    "image": "/equipment_images/armours/Sorcerer_Manchettes.webp",
    "dmgNegation": {
      "physical": 1,
      "strike": 1.3,
      "slash": 1.3,
      "pierce": 0.1,
      "magic": 3.2,
      "fire": 3.1,
      "lightning": 2.9,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 13,
      "robustness": 4,
      "focus": 21,
      "vitality": 20
    },
    "poise": 1,
    "weight": 1.1
  },
  {
    "id": "830300",
    "name": "Sorcerer Leggings",
    "category": "Legs",
    "image": "/equipment_images/armours/Sorcerer_Leggings.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 3,
      "slash": 3,
      "pierce": 0.3,
      "magic": 7.3,
      "fire": 7.1,
      "lightning": 6.8,
      "holy": 7.2
    },
    "resistances": {
      "immunity": 24,
      "robustness": 7,
      "focus": 39,
      "vitality": 37
    },
    "poise": 3,
    "weight": 2
  },
  {
    "id": "831000",
    "name": "Olivinus Glintstone Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Olivinus_Glintstone_Crown.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.1,
      "slash": 5.2,
      "pierce": 4.8,
      "magic": 4.4,
      "fire": 4.5,
      "lightning": 3.4,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 16,
      "robustness": 26,
      "focus": 10,
      "vitality": 10
    },
    "poise": 6,
    "effect": "Increases intelligence to the detriment of HP",
    "statChanges": {
      "maxHp": 0.91,
      "intelligence": 3
    },
    "weight": 5.1
  },
  {
    "id": "832000",
    "name": "Lazuli Glintstone Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Lazuli_Glintstone_Crown.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.1,
      "slash": 5.2,
      "pierce": 4.8,
      "magic": 4.4,
      "fire": 4.5,
      "lightning": 3.4,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 16,
      "robustness": 26,
      "focus": 10,
      "vitality": 10
    },
    "poise": 6,
    "effect": "Increases intelligence and dexterity to the detriment of HP",
    "statChanges": {
      "maxHp": 0.82,
      "dexterity": 3,
      "intelligence": 3
    },
    "weight": 5.1
  },
  {
    "id": "833000",
    "name": "Karolos Glintstone Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Karolos_Glintstone_Crown.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.1,
      "slash": 5.2,
      "pierce": 4.8,
      "magic": 4.4,
      "fire": 4.5,
      "lightning": 3.4,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 16,
      "robustness": 26,
      "focus": 10,
      "vitality": 10
    },
    "poise": 6,
    "effect": "Increases intelligence to the detriment of stamina",
    "statChanges": {
      "maxStamina": 0.91,
      "intelligence": 3
    },
    "weight": 5.1
  },
  {
    "id": "834000",
    "name": "Witch's Glintstone Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Witch's_Glintstone_Crown.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.1,
      "slash": 5.2,
      "pierce": 4.8,
      "magic": 4.4,
      "fire": 4.5,
      "lightning": 3.4,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 16,
      "robustness": 26,
      "focus": 10,
      "vitality": 10
    },
    "poise": 6,
    "effect": "Increases intelligence and arcane to the detriment of stamina",
    "statChanges": {
      "maxStamina": 0.82,
      "intelligence": 3,
      "arcane": 3
    },
    "weight": 5.1
  },
  {
    "id": "840000",
    "name": "Marionette Soldier Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Marionette_Soldier_Helm.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.1,
      "slash": 4,
      "pierce": 3.8,
      "magic": 3.1,
      "fire": 3.1,
      "lightning": 2.3,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 10,
      "robustness": 22,
      "focus": 9,
      "vitality": 8
    },
    "poise": 6,
    "weight": 3.8
  },
  {
    "id": "840100",
    "name": "Marionette Soldier Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Marionette_Soldier_Armor.webp",
    "dmgNegation": {
      "physical": 11.9,
      "strike": 8.8,
      "slash": 13.5,
      "pierce": 8.8,
      "magic": 8.8,
      "fire": 8.8,
      "lightning": 6.7,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 24,
      "robustness": 50,
      "focus": 21,
      "vitality": 18
    },
    "poise": 18,
    "weight": 8.8
  },
  {
    "id": "850000",
    "name": "Marionette Soldier Birdhelm",
    "category": "Head",
    "image": "/equipment_images/armours/Marionette_Soldier_Birdhelm.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.1,
      "slash": 4,
      "pierce": 3.8,
      "magic": 3.1,
      "fire": 3.1,
      "lightning": 2.5,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 11,
      "robustness": 18,
      "focus": 8,
      "vitality": 9
    },
    "poise": 6,
    "weight": 3.8
  },
  {
    "id": "860000",
    "name": "Raging Wolf Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Raging_Wolf_Helm.webp",
    "dmgNegation": {
      "physical": 4.7,
      "strike": 4.1,
      "slash": 4.7,
      "pierce": 4.5,
      "magic": 3.5,
      "fire": 3.9,
      "lightning": 2.4,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 14,
      "robustness": 23,
      "focus": 8,
      "vitality": 8
    },
    "poise": 7,
    "weight": 4.4
  },
  {
    "id": "860100",
    "name": "Raging Wolf Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Raging_Wolf_Armor.webp",
    "dmgNegation": {
      "physical": 13.2,
      "strike": 11.6,
      "slash": 13.2,
      "pierce": 12.6,
      "magic": 9.9,
      "fire": 11.1,
      "lightning": 6.8,
      "holy": 9.2
    },
    "resistances": {
      "immunity": 31,
      "robustness": 55,
      "focus": 17,
      "vitality": 17
    },
    "poise": 21,
    "weight": 10.1
  },
  {
    "id": "860200",
    "name": "Raging Wolf Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Raging_Wolf_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.2,
      "strike": 2.8,
      "slash": 3.2,
      "pierce": 3.1,
      "magic": 2.4,
      "fire": 2.7,
      "lightning": 1.6,
      "holy": 2.2
    },
    "resistances": {
      "immunity": 11,
      "robustness": 19,
      "focus": 6,
      "vitality": 6
    },
    "poise": 4,
    "weight": 3.4
  },
  {
    "id": "860300",
    "name": "Raging Wolf Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Raging_Wolf_Greaves.webp",
    "dmgNegation": {
      "physical": 7.5,
      "strike": 6.6,
      "slash": 7.5,
      "pierce": 7.2,
      "magic": 5.6,
      "fire": 6.3,
      "lightning": 3.8,
      "holy": 5.2
    },
    "resistances": {
      "immunity": 19,
      "robustness": 34,
      "focus": 11,
      "vitality": 11
    },
    "poise": 12,
    "weight": 6.3
  },
  {
    "id": "861100",
    "name": "Raging Wolf Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Raging_Wolf_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 12.8,
      "strike": 10.8,
      "slash": 12.8,
      "pierce": 12.3,
      "magic": 8.7,
      "fire": 10.8,
      "lightning": 6.6,
      "holy": 8.7
    },
    "resistances": {
      "immunity": 25,
      "robustness": 50,
      "focus": 10,
      "vitality": 10
    },
    "poise": 19,
    "weight": 9
  },
  {
    "id": "870000",
    "name": "Land of Reeds Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Land_of_Reeds_Helm.webp",
    "dmgNegation": {
      "physical": 3.1,
      "strike": 3.4,
      "slash": 4.8,
      "pierce": 3.4,
      "magic": 3.6,
      "fire": 4,
      "lightning": 4.2,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 26,
      "robustness": 22,
      "focus": 0,
      "vitality": 23
    },
    "poise": 5,
    "weight": 3.6
  },
  {
    "id": "870100",
    "name": "Land of Reeds Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Land_of_Reeds_Armor.webp",
    "dmgNegation": {
      "physical": 8.8,
      "strike": 9.5,
      "slash": 11.9,
      "pierce": 9.5,
      "magic": 10.2,
      "fire": 11.4,
      "lightning": 11.9,
      "holy": 10.9
    },
    "resistances": {
      "immunity": 60,
      "robustness": 50,
      "focus": 50,
      "vitality": 55
    },
    "poise": 16,
    "weight": 8.3
  },
  {
    "id": "870200",
    "name": "Land of Reeds Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Land_of_Reeds_Gauntlets.webp",
    "dmgNegation": {
      "physical": 2.1,
      "strike": 2.3,
      "slash": 2.9,
      "pierce": 2.3,
      "magic": 2.5,
      "fire": 2.8,
      "lightning": 2.9,
      "holy": 2.7
    },
    "resistances": {
      "immunity": 20,
      "robustness": 17,
      "focus": 17,
      "vitality": 18
    },
    "poise": 3,
    "weight": 2.8
  },
  {
    "id": "870300",
    "name": "Land of Reeds Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Land_of_Reeds_Greaves.webp",
    "dmgNegation": {
      "physical": 5,
      "strike": 5.4,
      "slash": 6.8,
      "pierce": 5.4,
      "magic": 5.8,
      "fire": 6.5,
      "lightning": 6.8,
      "holy": 6.2
    },
    "resistances": {
      "immunity": 37,
      "robustness": 31,
      "focus": 31,
      "vitality": 34
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "871100",
    "name": "Land of Reeds Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Land_of_Reeds_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 8.8,
      "slash": 11.4,
      "pierce": 8.8,
      "magic": 9.5,
      "fire": 10.9,
      "lightning": 11.4,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 52,
      "robustness": 42,
      "focus": 42,
      "vitality": 45
    },
    "poise": 15,
    "weight": 7.8
  },
  {
    "id": "872000",
    "name": "Okina Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Okina_Mask.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3.6,
      "slash": 4,
      "pierce": 3.1,
      "magic": 3.8,
      "fire": 3.8,
      "lightning": 4.2,
      "holy": 3.6
    },
    "resistances": {
      "immunity": 29,
      "robustness": 18,
      "focus": 23,
      "vitality": 22
    },
    "poise": 6,
    "effect": "Raises dexterity as it lowers focus",
    "statChanges": {
      "focus": -50,
      "dexterity": 3
    },
    "weight": 3.6
  },
  {
    "id": "872100",
    "name": "White Reed Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/White_Reed_Armor.webp",
    "dmgNegation": {
      "physical": 9.5,
      "strike": 10.2,
      "slash": 11.4,
      "pierce": 8.8,
      "magic": 10.9,
      "fire": 10.9,
      "lightning": 11.9,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 67,
      "robustness": 42,
      "focus": 55,
      "vitality": 50
    },
    "poise": 17,
    "weight": 8.3
  },
  {
    "id": "872200",
    "name": "White Reed Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/White_Reed_Gauntlets.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 2.5,
      "slash": 2.8,
      "pierce": 2.1,
      "magic": 2.7,
      "fire": 2.7,
      "lightning": 2.9,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 22,
      "robustness": 14,
      "focus": 18,
      "vitality": 17
    },
    "poise": 4,
    "weight": 2.8
  },
  {
    "id": "872300",
    "name": "White Reed Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/White_Reed_Greaves.webp",
    "dmgNegation": {
      "physical": 5.4,
      "strike": 5.8,
      "slash": 6.5,
      "pierce": 5,
      "magic": 6.2,
      "fire": 6.2,
      "lightning": 6.8,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 41,
      "robustness": 26,
      "focus": 34,
      "vitality": 31
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "880000",
    "name": "Confessor Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Confessor_Hood.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 3.6,
      "slash": 2.8,
      "pierce": 3.1,
      "magic": 3.8,
      "fire": 3.8,
      "lightning": 4.2,
      "holy": 3.4
    },
    "resistances": {
      "immunity": 26,
      "robustness": 20,
      "focus": 20,
      "vitality": 22
    },
    "poise": 5,
    "weight": 3.3
  },
  {
    "id": "880100",
    "name": "Confessor Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Confessor_Armor.webp",
    "dmgNegation": {
      "physical": 8.8,
      "strike": 10.9,
      "slash": 8.8,
      "pierce": 9.5,
      "magic": 11.4,
      "fire": 11.4,
      "lightning": 12.4,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 63,
      "robustness": 50,
      "focus": 50,
      "vitality": 55
    },
    "poise": 16,
    "weight": 8.3
  },
  {
    "id": "880200",
    "name": "Confessor Gloves",
    "category": "Arms",
    "image": "/equipment_images/armours/Confessor_Gloves.webp",
    "dmgNegation": {
      "physical": 2.1,
      "strike": 2.7,
      "slash": 2.1,
      "pierce": 2.3,
      "magic": 2.8,
      "fire": 2.8,
      "lightning": 3.1,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 21,
      "robustness": 17,
      "focus": 17,
      "vitality": 18
    },
    "poise": 3,
    "weight": 2.8
  },
  {
    "id": "880300",
    "name": "Confessor Boots",
    "category": "Legs",
    "image": "/equipment_images/armours/Confessor_Boots.webp",
    "dmgNegation": {
      "physical": 4.5,
      "strike": 5.8,
      "slash": 4.5,
      "pierce": 5,
      "magic": 6.2,
      "fire": 6.2,
      "lightning": 6.8,
      "holy": 5.4
    },
    "resistances": {
      "immunity": 37,
      "robustness": 29,
      "focus": 29,
      "vitality": 31
    },
    "poise": 9,
    "weight": 4.8
  },
  {
    "id": "881000",
    "name": "Confessor Hood (Altered)",
    "category": "Head",
    "image": "/equipment_images/armours/Confessor_Hood_(Altered).webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 3.1,
      "slash": 2.3,
      "pierce": 2.5,
      "magic": 3.4,
      "fire": 3.4,
      "lightning": 3.8,
      "holy": 2.8
    },
    "resistances": {
      "immunity": 21,
      "robustness": 14,
      "focus": 14,
      "vitality": 16
    },
    "poise": 3,
    "weight": 2.7
  },
  {
    "id": "881100",
    "name": "Confessor Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Confessor_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 7.6,
      "strike": 9.8,
      "slash": 7.6,
      "pierce": 8.4,
      "magic": 10.5,
      "fire": 10.5,
      "lightning": 11.5,
      "holy": 9.1
    },
    "resistances": {
      "immunity": 54,
      "robustness": 42,
      "focus": 42,
      "vitality": 45
    },
    "poise": 15,
    "weight": 7.3
  },
  {
    "id": "890000",
    "name": "Prisoner Iron Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Prisoner_Iron_Mask.webp",
    "dmgNegation": {
      "physical": 6.8,
      "strike": 5.9,
      "slash": 7,
      "pierce": 6.8,
      "magic": 4.6,
      "fire": 4.9,
      "lightning": 4.5,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 29,
      "robustness": 44,
      "focus": 35,
      "vitality": 20
    },
    "poise": 12,
    "weight": 8.6
  },
  {
    "id": "890100",
    "name": "Prisoner Clothing",
    "category": "Chest",
    "image": "/equipment_images/armours/Prisoner_Clothing.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 5.3,
      "slash": 5.3,
      "pierce": 4.2,
      "magic": 11.9,
      "fire": 11.4,
      "lightning": 11.4,
      "holy": 12.6
    },
    "resistances": {
      "immunity": 42,
      "robustness": 23,
      "focus": 63,
      "vitality": 63
    },
    "poise": 5,
    "weight": 3.2
  },
  {
    "id": "890300",
    "name": "Prisoner Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Prisoner_Trousers.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 3,
      "slash": 3,
      "pierce": 2.3,
      "magic": 6.8,
      "fire": 6.5,
      "lightning": 6.5,
      "holy": 7.2
    },
    "resistances": {
      "immunity": 26,
      "robustness": 14,
      "focus": 39,
      "vitality": 39
    },
    "poise": 4,
    "weight": 2
  },
  {
    "id": "891000",
    "name": "Blackguard's Iron Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Blackguard's_Iron_Mask.webp",
    "dmgNegation": {
      "physical": 5.8,
      "strike": 4.4,
      "slash": 6.1,
      "pierce": 5.5,
      "magic": 4.2,
      "fire": 4.4,
      "lightning": 4,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 22,
      "robustness": 31,
      "focus": 12,
      "vitality": 12
    },
    "poise": 9,
    "weight": 6.2
  },
  {
    "id": "900000",
    "name": "Traveling Maiden Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Traveling_Maiden_Hood.webp",
    "dmgNegation": {
      "physical": 1.4,
      "strike": 1.8,
      "slash": 1.8,
      "pierce": 0.9,
      "magic": 4.6,
      "fire": 4.5,
      "lightning": 4.6,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 18,
      "robustness": 10,
      "focus": 29,
      "vitality": 31
    },
    "poise": 3,
    "weight": 1.6
  },
  {
    "id": "900100",
    "name": "Traveling Maiden Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Traveling_Maiden_Robe.webp",
    "dmgNegation": {
      "physical": 5.4,
      "strike": 6.2,
      "slash": 6.2,
      "pierce": 4.3,
      "magic": 13.4,
      "fire": 12.9,
      "lightning": 13.1,
      "holy": 13.4
    },
    "resistances": {
      "immunity": 46,
      "robustness": 24,
      "focus": 76,
      "vitality": 83
    },
    "poise": 10,
    "weight": 4.9
  },
  {
    "id": "900200",
    "name": "Traveling Maiden Gloves",
    "category": "Arms",
    "image": "/equipment_images/armours/Traveling_Maiden_Gloves.webp",
    "dmgNegation": {
      "physical": 1.3,
      "strike": 1.5,
      "slash": 1.5,
      "pierce": 1,
      "magic": 3.3,
      "fire": 3.2,
      "lightning": 3.2,
      "holy": 3.3
    },
    "resistances": {
      "immunity": 15,
      "robustness": 8,
      "focus": 25,
      "vitality": 28
    },
    "poise": 2,
    "weight": 1.6
  },
  {
    "id": "900300",
    "name": "Traveling Maiden Boots",
    "category": "Legs",
    "image": "/equipment_images/armours/Traveling_Maiden_Boots.webp",
    "dmgNegation": {
      "physical": 3.1,
      "strike": 3.5,
      "slash": 3.5,
      "pierce": 2.4,
      "magic": 7.7,
      "fire": 7.4,
      "lightning": 7.5,
      "holy": 7.7
    },
    "resistances": {
      "immunity": 29,
      "robustness": 15,
      "focus": 47,
      "vitality": 51
    },
    "poise": 6,
    "weight": 2.9
  },
  {
    "id": "901100",
    "name": "Traveling Maiden Robe (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Traveling_Maiden_Robe_(Altered).webp",
    "dmgNegation": {
      "physical": 4.3,
      "strike": 5.4,
      "slash": 5.4,
      "pierce": 2.8,
      "magic": 13.1,
      "fire": 12.7,
      "lightning": 12.9,
      "holy": 13.1
    },
    "resistances": {
      "immunity": 38,
      "robustness": 21,
      "focus": 61,
      "vitality": 64
    },
    "poise": 8,
    "weight": 4.3
  },
  {
    "id": "902000",
    "name": "Finger Maiden Fillet",
    "category": "Head",
    "image": "/equipment_images/armours/Finger_Maiden_Fillet.webp",
    "dmgNegation": {
      "physical": 2.1,
      "strike": 1.8,
      "slash": 1.8,
      "pierce": 1.4,
      "magic": 4.8,
      "fire": 4.6,
      "lightning": 4.6,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 18,
      "robustness": 10,
      "focus": 31,
      "vitality": 31
    },
    "poise": 4,
    "weight": 2.2
  },
  {
    "id": "902100",
    "name": "Finger Maiden Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Finger_Maiden_Robe.webp",
    "dmgNegation": {
      "physical": 5.8,
      "strike": 4.7,
      "slash": 4.7,
      "pierce": 3.2,
      "magic": 13.8,
      "fire": 13.1,
      "lightning": 13.3,
      "holy": 13.8
    },
    "resistances": {
      "immunity": 38,
      "robustness": 21,
      "focus": 63,
      "vitality": 63
    },
    "poise": 10,
    "weight": 4.6
  },
  {
    "id": "902300",
    "name": "Finger Maiden Shoes",
    "category": "Legs",
    "image": "/equipment_images/armours/Finger_Maiden_Shoes.webp",
    "dmgNegation": {
      "physical": 3,
      "strike": 2.3,
      "slash": 2.3,
      "pierce": 1.5,
      "magic": 7.6,
      "fire": 7.2,
      "lightning": 7.3,
      "holy": 7.6
    },
    "resistances": {
      "immunity": 24,
      "robustness": 13,
      "focus": 39,
      "vitality": 39
    },
    "poise": 4,
    "weight": 2.5
  },
  {
    "id": "903100",
    "name": "Finger Maiden Robe (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Finger_Maiden_Robe_(Altered).webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 2.7,
      "slash": 2.7,
      "pierce": 0.6,
      "magic": 13,
      "fire": 12.4,
      "lightning": 12.6,
      "holy": 13.5
    },
    "resistances": {
      "immunity": 32,
      "robustness": 16,
      "focus": 54,
      "vitality": 54
    },
    "poise": 8,
    "weight": 3.7
  },
  {
    "id": "910000",
    "name": "Preceptor's Big Hat",
    "category": "Head",
    "image": "/equipment_images/armours/Preceptor's_Big_Hat.webp",
    "dmgNegation": {
      "physical": 2.5,
      "strike": 2.8,
      "slash": 2.5,
      "pierce": 2.5,
      "magic": 5.5,
      "fire": 4.9,
      "lightning": 4.8,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 26,
      "robustness": 12,
      "focus": 44,
      "vitality": 42
    },
    "poise": 5,
    "effect": "Increases mind to the detriment of stamina",
    "statChanges": {
      "maxStamina": 0.91,
      "mind": 3
    },
    "weight": 3.6
  },
  {
    "id": "910100",
    "name": "Preceptor's Long Gown",
    "category": "Chest",
    "image": "/equipment_images/armours/Preceptor's_Long_Gown.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 6.7,
      "slash": 6.1,
      "pierce": 6.1,
      "magic": 14.5,
      "fire": 13.3,
      "lightning": 12.8,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 50,
      "robustness": 24,
      "focus": 83,
      "vitality": 76
    },
    "poise": 12,
    "weight": 6.3
  },
  {
    "id": "910200",
    "name": "Preceptor's Gloves",
    "category": "Arms",
    "image": "/equipment_images/armours/Preceptor's_Gloves.webp",
    "dmgNegation": {
      "physical": 1.5,
      "strike": 1.6,
      "slash": 1.5,
      "pierce": 1.5,
      "magic": 3.6,
      "fire": 3.3,
      "lightning": 3.2,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 17,
      "robustness": 8,
      "focus": 28,
      "vitality": 25
    },
    "poise": 3,
    "weight": 2.1
  },
  {
    "id": "910300",
    "name": "Preceptor's Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Preceptor's_Trousers.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3.8,
      "slash": 3.4,
      "pierce": 3.4,
      "magic": 8.3,
      "fire": 7.6,
      "lightning": 7.3,
      "holy": 7.3
    },
    "resistances": {
      "immunity": 31,
      "robustness": 15,
      "focus": 51,
      "vitality": 47
    },
    "poise": 7,
    "weight": 3.9
  },
  {
    "id": "911000",
    "name": "Mask of Confidence",
    "category": "Head",
    "image": "/equipment_images/armours/Mask_of_Confidence.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 2.5,
      "slash": 2.3,
      "pierce": 2.3,
      "magic": 5.3,
      "fire": 4.8,
      "lightning": 4.7,
      "holy": 4.7
    },
    "resistances": {
      "immunity": 24,
      "robustness": 11,
      "focus": 39,
      "vitality": 35
    },
    "poise": 5,
    "effect": "Increases arcane",
    "statChanges": {
      "arcane": 3
    },
    "weight": 3.3
  },
  {
    "id": "911100",
    "name": "Preceptor's Long Gown (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Preceptor's_Long_Gown_(Altered).webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 4.2,
      "slash": 2.7,
      "pierce": 4.2,
      "magic": 12.8,
      "fire": 12.4,
      "lightning": 11.9,
      "holy": 12.4
    },
    "resistances": {
      "immunity": 38,
      "robustness": 16,
      "focus": 57,
      "vitality": 57
    },
    "poise": 7,
    "weight": 3.2
  },
  {
    "id": "930000",
    "name": "Skeletal Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Skeletal_Mask.webp",
    "dmgNegation": {
      "physical": 2.5,
      "strike": 2.8,
      "slash": 3.1,
      "pierce": 3.1,
      "magic": 3.4,
      "fire": 3.4,
      "lightning": 3.6,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 23,
      "robustness": 14,
      "focus": 24,
      "vitality": 24
    },
    "poise": 4,
    "weight": 3
  },
  {
    "id": "930100",
    "name": "Raptor's Black Feathers",
    "category": "Chest",
    "image": "/equipment_images/armours/Raptor's_Black_Feathers.webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 8.8,
      "slash": 9.5,
      "pierce": 9.5,
      "magic": 10.2,
      "fire": 10.2,
      "lightning": 10.9,
      "holy": 9.5
    },
    "resistances": {
      "immunity": 57,
      "robustness": 35,
      "focus": 60,
      "vitality": 60
    },
    "poise": 15,
    "effect": "Strengthens jump attacks",
    "weight": 7.7
  },
  {
    "id": "930200",
    "name": "Bandit Manchettes",
    "category": "Arms",
    "image": "/equipment_images/armours/Bandit_Manchettes.webp",
    "dmgNegation": {
      "physical": 1.5,
      "strike": 1.6,
      "slash": 1.7,
      "pierce": 1.7,
      "magic": 1.9,
      "fire": 1.9,
      "lightning": 2.1,
      "holy": 1.7
    },
    "resistances": {
      "immunity": 15,
      "robustness": 8,
      "focus": 17,
      "vitality": 17
    },
    "poise": 2,
    "weight": 1.7
  },
  {
    "id": "930300",
    "name": "Bandit Boots",
    "category": "Legs",
    "image": "/equipment_images/armours/Bandit_Boots.webp",
    "dmgNegation": {
      "physical": 4,
      "strike": 4.5,
      "slash": 5,
      "pierce": 5,
      "magic": 5.4,
      "fire": 5.4,
      "lightning": 5.8,
      "holy": 5
    },
    "resistances": {
      "immunity": 34,
      "robustness": 20,
      "focus": 35,
      "vitality": 35
    },
    "poise": 8,
    "weight": 4.4
  },
  {
    "id": "931100",
    "name": "Bandit Garb",
    "category": "Chest",
    "image": "/equipment_images/armours/Bandit_Garb.webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 8.8,
      "slash": 9.5,
      "pierce": 9.5,
      "magic": 10.2,
      "fire": 10.2,
      "lightning": 10.9,
      "holy": 9.5
    },
    "resistances": {
      "immunity": 52,
      "robustness": 32,
      "focus": 54,
      "vitality": 54
    },
    "poise": 15,
    "weight": 7.7
  },
  {
    "id": "940000",
    "name": "Eccentric's Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Eccentric's_Hood.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.4,
      "slash": 4.2,
      "pierce": 4.4,
      "magic": 3.4,
      "fire": 3.6,
      "lightning": 2.3,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 14,
      "robustness": 24,
      "focus": 9,
      "vitality": 8
    },
    "poise": 6,
    "weight": 4
  },
  {
    "id": "940100",
    "name": "Eccentric's Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Eccentric's_Armor.webp",
    "dmgNegation": {
      "physical": 12.9,
      "strike": 10.9,
      "slash": 12.4,
      "pierce": 12.9,
      "magic": 10.9,
      "fire": 10.9,
      "lightning": 7.1,
      "holy": 9.5
    },
    "resistances": {
      "immunity": 35,
      "robustness": 60,
      "focus": 23,
      "vitality": 21
    },
    "poise": 21,
    "weight": 10.6
  },
  {
    "id": "940200",
    "name": "Eccentric's Manchettes",
    "category": "Arms",
    "image": "/equipment_images/armours/Eccentric's_Manchettes.webp",
    "dmgNegation": {
      "physical": 2.9,
      "strike": 2.1,
      "slash": 2.8,
      "pierce": 2.9,
      "magic": 2.1,
      "fire": 2.3,
      "lightning": 1.5,
      "holy": 1.9
    },
    "resistances": {
      "immunity": 8,
      "robustness": 18,
      "focus": 6,
      "vitality": 4
    },
    "poise": 4,
    "weight": 2.9
  },
  {
    "id": "940300",
    "name": "Eccentric's Breeches",
    "category": "Legs",
    "image": "/equipment_images/armours/Eccentric's_Breeches.webp",
    "dmgNegation": {
      "physical": 6.5,
      "strike": 4.5,
      "slash": 6.2,
      "pierce": 6.5,
      "magic": 4.5,
      "fire": 5,
      "lightning": 3,
      "holy": 4
    },
    "resistances": {
      "immunity": 15,
      "robustness": 31,
      "focus": 7,
      "vitality": 7
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "941000",
    "name": "Eccentric's Hood (Altered)",
    "category": "Head",
    "image": "/equipment_images/armours/Eccentric's_Hood_(Altered).webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.4,
      "slash": 4.2,
      "pierce": 4.4,
      "magic": 3.4,
      "fire": 3.6,
      "lightning": 2.3,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 12,
      "robustness": 21,
      "focus": 8,
      "vitality": 7
    },
    "poise": 6,
    "weight": 4
  },
  {
    "id": "950000",
    "name": "Fingerprint Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Fingerprint_Helm.webp",
    "dmgNegation": {
      "physical": 4.8,
      "strike": 4.2,
      "slash": 4.2,
      "pierce": 4.2,
      "magic": 3.4,
      "fire": 4.5,
      "lightning": 2.3,
      "holy": 3.4
    },
    "resistances": {
      "immunity": 14,
      "robustness": 26,
      "focus": 5,
      "vitality": 10
    },
    "poise": 8,
    "weight": 4.6
  },
  {
    "id": "950100",
    "name": "Fingerprint Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Fingerprint_Armor.webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 11.9,
      "slash": 11.9,
      "pierce": 11.9,
      "magic": 9.5,
      "fire": 12.6,
      "lightning": 6.7,
      "holy": 9.5
    },
    "resistances": {
      "immunity": 32,
      "robustness": 60,
      "focus": 11,
      "vitality": 23
    },
    "poise": 24,
    "weight": 10.6
  },
  {
    "id": "950200",
    "name": "Fingerprint Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Fingerprint_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.3,
      "strike": 2.9,
      "slash": 2.9,
      "pierce": 2.9,
      "magic": 2.3,
      "fire": 3.1,
      "lightning": 1.6,
      "holy": 2.3
    },
    "resistances": {
      "immunity": 11,
      "robustness": 20,
      "focus": 4,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.5
  },
  {
    "id": "950300",
    "name": "Fingerprint Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Fingerprint_Greaves.webp",
    "dmgNegation": {
      "physical": 7.7,
      "strike": 6.8,
      "slash": 6.8,
      "pierce": 6.8,
      "magic": 5.4,
      "fire": 7.2,
      "lightning": 3.8,
      "holy": 5.4
    },
    "resistances": {
      "immunity": 20,
      "robustness": 37,
      "focus": 7,
      "vitality": 14
    },
    "poise": 14,
    "weight": 6.6
  },
  {
    "id": "951100",
    "name": "Fingerprint Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Fingerprint_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 13.1,
      "strike": 11.5,
      "slash": 11.5,
      "pierce": 11.5,
      "magic": 9.1,
      "fire": 12.2,
      "lightning": 6.3,
      "holy": 9.1
    },
    "resistances": {
      "immunity": 29,
      "robustness": 54,
      "focus": 10,
      "vitality": 21
    },
    "poise": 24,
    "weight": 10
  },
  {
    "id": "960000",
    "name": "Consort's Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Consort's_Mask.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 2.8,
      "slash": 2.5,
      "pierce": 2.5,
      "magic": 5,
      "fire": 4.8,
      "lightning": 4.8,
      "holy": 5
    },
    "resistances": {
      "immunity": 24,
      "robustness": 14,
      "focus": 39,
      "vitality": 35
    },
    "poise": 5,
    "effect": "Increases dexterity",
    "statChanges": {
      "dexterity": 1
    },
    "weight": 3.6
  },
  {
    "id": "960100",
    "name": "Consort's Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Consort's_Robe.webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 4.2,
      "slash": 4.2,
      "pierce": 5.3,
      "magic": 13,
      "fire": 12.4,
      "lightning": 12.4,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 46,
      "robustness": 25,
      "focus": 67,
      "vitality": 63
    },
    "poise": 7,
    "weight": 4.1
  },
  {
    "id": "960300",
    "name": "Consort's Trousers",
    "category": "Legs",
    "image": "/equipment_images/armours/Consort's_Trousers.webp",
    "dmgNegation": {
      "physical": 3,
      "strike": 2.3,
      "slash": 2.3,
      "pierce": 3,
      "magic": 7.4,
      "fire": 7.1,
      "lightning": 7.1,
      "holy": 7.3
    },
    "resistances": {
      "immunity": 29,
      "robustness": 15,
      "focus": 41,
      "vitality": 39
    },
    "poise": 4,
    "weight": 2.5
  },
  {
    "id": "961000",
    "name": "Ruler's Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Ruler's_Mask.webp",
    "dmgNegation": {
      "physical": 1.8,
      "strike": 2.3,
      "slash": 2.3,
      "pierce": 1.4,
      "magic": 4.6,
      "fire": 4.4,
      "lightning": 4.6,
      "holy": 4.7
    },
    "resistances": {
      "immunity": 20,
      "robustness": 10,
      "focus": 33,
      "vitality": 33
    },
    "poise": 3,
    "effect": "Increases faith",
    "statChanges": {
      "faith": 1
    },
    "weight": 2.2
  },
  {
    "id": "961100",
    "name": "Ruler's Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Ruler's_Robe.webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 6.7,
      "slash": 6.7,
      "pierce": 4.2,
      "magic": 13,
      "fire": 12.4,
      "lightning": 12.8,
      "holy": 13.3
    },
    "resistances": {
      "immunity": 46,
      "robustness": 24,
      "focus": 76,
      "vitality": 76
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "962100",
    "name": "Upper-Class Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Upper-Class_Robe.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 6.1,
      "slash": 6.1,
      "pierce": 2.7,
      "magic": 12.8,
      "fire": 11.9,
      "lightning": 12.6,
      "holy": 13
    },
    "resistances": {
      "immunity": 38,
      "robustness": 21,
      "focus": 61,
      "vitality": 61
    },
    "poise": 8,
    "weight": 4.1
  },
  {
    "id": "963000",
    "name": "Marais Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Marais_Mask.webp",
    "dmgNegation": {
      "physical": 2.1,
      "strike": 2.3,
      "slash": 1.8,
      "pierce": 1.4,
      "magic": 4.6,
      "fire": 4.5,
      "lightning": 4.5,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 20,
      "robustness": 14,
      "focus": 35,
      "vitality": 33
    },
    "poise": 4,
    "effect": "Increases arcane",
    "statChanges": {
      "arcane": 1
    },
    "weight": 2.2
  },
  {
    "id": "963100",
    "name": "Marais Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Marais_Robe.webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 6.1,
      "slash": 4.2,
      "pierce": 2.7,
      "magic": 12.6,
      "fire": 12.4,
      "lightning": 12.4,
      "holy": 12.6
    },
    "resistances": {
      "immunity": 42,
      "robustness": 28,
      "focus": 71,
      "vitality": 67
    },
    "poise": 8,
    "weight": 4.1
  },
  {
    "id": "963200",
    "name": "Bloodsoaked Manchettes",
    "category": "Arms",
    "image": "/equipment_images/armours/Bloodsoaked_Manchettes.webp",
    "dmgNegation": {
      "physical": 1.3,
      "strike": 1.5,
      "slash": 1,
      "pierce": 0.6,
      "magic": 3.1,
      "fire": 3.1,
      "lightning": 3.1,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 14,
      "robustness": 9,
      "focus": 24,
      "vitality": 22
    },
    "poise": 2,
    "weight": 1.4
  },
  {
    "id": "964000",
    "name": "Bloodsoaked Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Bloodsoaked_Mask.webp",
    "dmgNegation": {
      "physical": 1.8,
      "strike": 1.8,
      "slash": 1.8,
      "pierce": 2.1,
      "magic": 4.6,
      "fire": 4.4,
      "lightning": 4.5,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 18,
      "robustness": 10,
      "focus": 30,
      "vitality": 31
    },
    "poise": 3,
    "weight": 2.2
  },
  {
    "id": "964100",
    "name": "Official's Attire",
    "category": "Chest",
    "image": "/equipment_images/armours/Official's_Attire.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 4.2,
      "slash": 4.2,
      "pierce": 5.3,
      "magic": 12.8,
      "fire": 11.9,
      "lightning": 12.4,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 38,
      "robustness": 22,
      "focus": 61,
      "vitality": 64
    },
    "poise": 8,
    "weight": 4.1
  },
  {
    "id": "970000",
    "name": "Omen Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Omen_Helm.webp",
    "dmgNegation": {
      "physical": 6.7,
      "strike": 5.4,
      "slash": 6.8,
      "pierce": 6.8,
      "magic": 4.6,
      "fire": 5.2,
      "lightning": 5.3,
      "holy": 4.9
    },
    "resistances": {
      "immunity": 29,
      "robustness": 27,
      "focus": 24,
      "vitality": 33
    },
    "poise": 14,
    "weight": 9.9
  },
  {
    "id": "970100",
    "name": "Omen Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Omen_Armor.webp",
    "dmgNegation": {
      "physical": 18.3,
      "strike": 15,
      "slash": 18.7,
      "pierce": 18.7,
      "magic": 13,
      "fire": 14.5,
      "lightning": 14.9,
      "holy": 13.8
    },
    "resistances": {
      "immunity": 67,
      "robustness": 63,
      "focus": 57,
      "vitality": 76
    },
    "poise": 43,
    "weight": 23.1
  },
  {
    "id": "970200",
    "name": "Omen Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Omen_Gauntlets.webp",
    "dmgNegation": {
      "physical": 4.6,
      "strike": 3.7,
      "slash": 4.7,
      "pierce": 4.7,
      "magic": 3.2,
      "fire": 3.6,
      "lightning": 3.7,
      "holy": 3.4
    },
    "resistances": {
      "immunity": 22,
      "robustness": 21,
      "focus": 19,
      "vitality": 25
    },
    "poise": 9,
    "weight": 7.7
  },
  {
    "id": "970300",
    "name": "Omen Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Omen_Greaves.webp",
    "dmgNegation": {
      "physical": 10.6,
      "strike": 8.6,
      "slash": 10.8,
      "pierce": 10.8,
      "magic": 7.4,
      "fire": 8.3,
      "lightning": 8.5,
      "holy": 7.9
    },
    "resistances": {
      "immunity": 41,
      "robustness": 39,
      "focus": 35,
      "vitality": 47
    },
    "poise": 25,
    "weight": 14.3
  },
  {
    "id": "980000",
    "name": "Carian Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Carian_Knight_Helm.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 3.8,
      "slash": 4.4,
      "pierce": 4.2,
      "magic": 4.4,
      "fire": 4.2,
      "lightning": 3.4,
      "holy": 4.2
    },
    "resistances": {
      "immunity": 12,
      "robustness": 20,
      "focus": 9,
      "vitality": 10
    },
    "poise": 6,
    "weight": 4.6
  },
  {
    "id": "980100",
    "name": "Carian Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Carian_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 11.8,
      "strike": 10.8,
      "slash": 12.3,
      "pierce": 11.8,
      "magic": 12.3,
      "fire": 11.8,
      "lightning": 9.4,
      "holy": 11.8
    },
    "resistances": {
      "immunity": 28,
      "robustness": 46,
      "focus": 21,
      "vitality": 23
    },
    "poise": 19,
    "weight": 10.4
  },
  {
    "id": "980200",
    "name": "Carian Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Carian_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 2.9,
      "strike": 2.7,
      "slash": 3.1,
      "pierce": 2.9,
      "magic": 3.1,
      "fire": 2.9,
      "lightning": 2.3,
      "holy": 2.9
    },
    "resistances": {
      "immunity": 9,
      "robustness": 15,
      "focus": 7,
      "vitality": 8
    },
    "poise": 4,
    "weight": 3.5
  },
  {
    "id": "980300",
    "name": "Carian Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Carian_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 6.8,
      "strike": 6.2,
      "slash": 7.1,
      "pierce": 6.8,
      "magic": 7.1,
      "fire": 6.8,
      "lightning": 5.4,
      "holy": 6.8
    },
    "resistances": {
      "immunity": 17,
      "robustness": 29,
      "focus": 13,
      "vitality": 14
    },
    "poise": 11,
    "weight": 6.6
  },
  {
    "id": "981100",
    "name": "Carian Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Carian_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 11.7,
      "strike": 9.8,
      "slash": 12.2,
      "pierce": 11.7,
      "magic": 11.7,
      "fire": 11.7,
      "lightning": 9.1,
      "holy": 11.7
    },
    "resistances": {
      "immunity": 22,
      "robustness": 38,
      "focus": 16,
      "vitality": 19
    },
    "poise": 18,
    "weight": 9.7
  },
  {
    "id": "990000",
    "name": "Hierodas Glintstone Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Hierodas_Glintstone_Crown.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 2.3,
      "slash": 2.8,
      "pierce": 2.3,
      "magic": 4.9,
      "fire": 4.7,
      "lightning": 4.6,
      "holy": 4.9
    },
    "resistances": {
      "immunity": 20,
      "robustness": 11,
      "focus": 39,
      "vitality": 42
    },
    "poise": 4,
    "effect": "Increases intelligence and endurance to the detriment of FP",
    "statChanges": {
      "maxFp": 0.91,
      "endurance": 2,
      "intelligence": 2
    },
    "weight": 3
  },
  {
    "id": "990100",
    "name": "Errant Sorcerer Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Errant_Sorcerer_Robe.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 4.2,
      "slash": 6.1,
      "pierce": 4.2,
      "magic": 13,
      "fire": 12.6,
      "lightning": 12.4,
      "holy": 13
    },
    "resistances": {
      "immunity": 35,
      "robustness": 23,
      "focus": 67,
      "vitality": 71
    },
    "poise": 8,
    "weight": 4.1
  },
  {
    "id": "990200",
    "name": "Errant Sorcerer Manchettes",
    "category": "Arms",
    "image": "/equipment_images/armours/Errant_Sorcerer_Manchettes.webp",
    "dmgNegation": {
      "physical": 0.6,
      "strike": 0.6,
      "slash": 1.3,
      "pierce": 0.6,
      "magic": 3.2,
      "fire": 3.1,
      "lightning": 2.9,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 11,
      "robustness": 7,
      "focus": 21,
      "vitality": 22
    },
    "poise": 1,
    "weight": 1.1
  },
  {
    "id": "990300",
    "name": "Errant Sorcerer Boots",
    "category": "Legs",
    "image": "/equipment_images/armours/Errant_Sorcerer_Boots.webp",
    "dmgNegation": {
      "physical": 3,
      "strike": 3,
      "slash": 3.8,
      "pierce": 3,
      "magic": 7.6,
      "fire": 7.3,
      "lightning": 7.2,
      "holy": 7.6
    },
    "resistances": {
      "immunity": 24,
      "robustness": 15,
      "focus": 47,
      "vitality": 51
    },
    "poise": 5,
    "weight": 3.1
  },
  {
    "id": "991100",
    "name": "Errant Sorcerer Robe (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Errant_Sorcerer_Robe_(Altered).webp",
    "dmgNegation": {
      "physical": 2.7,
      "strike": 2.7,
      "slash": 5.3,
      "pierce": 2.7,
      "magic": 12.8,
      "fire": 12.4,
      "lightning": 11.9,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 31,
      "robustness": 20,
      "focus": 62,
      "vitality": 66
    },
    "poise": 7,
    "weight": 3.2
  },
  {
    "id": "1000000",
    "name": "Haima Glintstone Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Haima_Glintstone_Crown.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 2.5,
      "slash": 2.1,
      "pierce": 2.3,
      "magic": 4.8,
      "fire": 4.5,
      "lightning": 4.6,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 22,
      "robustness": 11,
      "focus": 33,
      "vitality": 39
    },
    "poise": 4,
    "effect": "Increases intelligence and strength to the detriment of FP",
    "statChanges": {
      "maxFp": 0.91,
      "strength": 2,
      "intelligence": 2
    },
    "weight": 2.7
  },
  {
    "id": "1000100",
    "name": "Battlemage Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Battlemage_Robe.webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 6.1,
      "slash": 4.2,
      "pierce": 5.3,
      "magic": 13,
      "fire": 11.9,
      "lightning": 12.4,
      "holy": 12.6
    },
    "resistances": {
      "immunity": 42,
      "robustness": 23,
      "focus": 63,
      "vitality": 71
    },
    "poise": 10,
    "weight": 4.1
  },
  {
    "id": "1000200",
    "name": "Battlemage Manchettes",
    "category": "Arms",
    "image": "/equipment_images/armours/Battlemage_Manchettes.webp",
    "dmgNegation": {
      "physical": 1,
      "strike": 1.3,
      "slash": 0.6,
      "pierce": 1,
      "magic": 3.2,
      "fire": 2.8,
      "lightning": 2.9,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 13,
      "robustness": 7,
      "focus": 20,
      "vitality": 22
    },
    "poise": 2,
    "weight": 1.1
  },
  {
    "id": "1000300",
    "name": "Battlemage Legwraps",
    "category": "Legs",
    "image": "/equipment_images/armours/Battlemage_Legwraps.webp",
    "dmgNegation": {
      "physical": 3,
      "strike": 3.4,
      "slash": 2.3,
      "pierce": 3,
      "magic": 7.4,
      "fire": 6.8,
      "lightning": 7.1,
      "holy": 7.2
    },
    "resistances": {
      "immunity": 26,
      "robustness": 14,
      "focus": 39,
      "vitality": 44
    },
    "poise": 6,
    "weight": 2.5
  },
  {
    "id": "1010000",
    "name": "Snow Witch Hat",
    "category": "Head",
    "image": "/equipment_images/armours/Snow_Witch_Hat.webp",
    "dmgNegation": {
      "physical": 1.8,
      "strike": 2.1,
      "slash": 2.1,
      "pierce": 1.4,
      "magic": 4.6,
      "fire": 4.6,
      "lightning": 4.6,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 16,
      "robustness": 14,
      "focus": 31,
      "vitality": 31
    },
    "poise": 3,
    "effect": "Strengthens cold sorcery",
    "weight": 2.2
  },
  {
    "id": "1010100",
    "name": "Snow Witch Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Snow_Witch_Robe.webp",
    "dmgNegation": {
      "physical": 5.7,
      "strike": 6.5,
      "slash": 6.5,
      "pierce": 4.6,
      "magic": 13.4,
      "fire": 13.4,
      "lightning": 13.2,
      "holy": 13.4
    },
    "resistances": {
      "immunity": 38,
      "robustness": 32,
      "focus": 71,
      "vitality": 71
    },
    "poise": 8,
    "weight": 5.5
  },
  {
    "id": "1010300",
    "name": "Snow Witch Skirt",
    "category": "Legs",
    "image": "/equipment_images/armours/Snow_Witch_Skirt.webp",
    "dmgNegation": {
      "physical": 3,
      "strike": 3.4,
      "slash": 3.4,
      "pierce": 2.3,
      "magic": 7.4,
      "fire": 7.4,
      "lightning": 7.3,
      "holy": 7.4
    },
    "resistances": {
      "immunity": 24,
      "robustness": 20,
      "focus": 44,
      "vitality": 44
    },
    "poise": 5,
    "weight": 3.1
  },
  {
    "id": "1011100",
    "name": "Snow Witch Robe (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Snow_Witch_Robe_(Altered).webp",
    "dmgNegation": {
      "physical": 4.6,
      "strike": 5.7,
      "slash": 5.7,
      "pierce": 3.1,
      "magic": 13.2,
      "fire": 13.2,
      "lightning": 13,
      "holy": 13.2
    },
    "resistances": {
      "immunity": 32,
      "robustness": 25,
      "focus": 57,
      "vitality": 57
    },
    "poise": 7,
    "weight": 4.6
  },
  {
    "id": "1020100",
    "name": "Traveler's Clothes",
    "category": "Chest",
    "image": "/equipment_images/armours/Traveler's_Clothes.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 5.3,
      "slash": 4.2,
      "pierce": 2.7,
      "magic": 13.3,
      "fire": 12.6,
      "lightning": 12.8,
      "holy": 12.4
    },
    "resistances": {
      "immunity": 35,
      "robustness": 24,
      "focus": 67,
      "vitality": 67
    },
    "poise": 8,
    "weight": 4.1
  },
  {
    "id": "1020200",
    "name": "Traveler's Manchettes",
    "category": "Arms",
    "image": "/equipment_images/armours/Traveler's_Manchettes.webp",
    "dmgNegation": {
      "physical": 1.6,
      "strike": 1.5,
      "slash": 1.3,
      "pierce": 1,
      "magic": 3.3,
      "fire": 3.2,
      "lightning": 3.2,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 13,
      "robustness": 8,
      "focus": 25,
      "vitality": 25
    },
    "poise": 2,
    "weight": 1.7
  },
  {
    "id": "1020300",
    "name": "Traveler's Boots",
    "category": "Legs",
    "image": "/equipment_images/armours/Traveler's_Boots.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 3.4,
      "slash": 3,
      "pierce": 2.3,
      "magic": 7.7,
      "fire": 7.3,
      "lightning": 7.4,
      "holy": 7.2
    },
    "resistances": {
      "immunity": 24,
      "robustness": 15,
      "focus": 47,
      "vitality": 47
    },
    "poise": 6,
    "weight": 3.1
  },
  {
    "id": "1030000",
    "name": "Juvenile Scholar Cap",
    "category": "Head",
    "image": "/equipment_images/armours/Juvenile_Scholar_Cap.webp",
    "dmgNegation": {
      "physical": 1.4,
      "strike": 1.8,
      "slash": 1.8,
      "pierce": 1.4,
      "magic": 4.5,
      "fire": 4,
      "lightning": 4.2,
      "holy": 4.4
    },
    "resistances": {
      "immunity": 15,
      "robustness": 10,
      "focus": 26,
      "vitality": 29
    },
    "poise": 2,
    "weight": 1.4
  },
  {
    "id": "1030100",
    "name": "Juvenile Scholar Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Juvenile_Scholar_Robe.webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 6.1,
      "slash": 6.1,
      "pierce": 5.3,
      "magic": 12.8,
      "fire": 11.9,
      "lightning": 12.4,
      "holy": 12.6
    },
    "resistances": {
      "immunity": 38,
      "robustness": 25,
      "focus": 63,
      "vitality": 71
    },
    "poise": 7,
    "weight": 4.1
  },
  {
    "id": "1040000",
    "name": "Radiant Gold Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Radiant_Gold_Mask.webp",
    "dmgNegation": {
      "physical": 2.3,
      "strike": 2.1,
      "slash": 2.1,
      "pierce": 1.4,
      "magic": 4.6,
      "fire": 4.5,
      "lightning": 4.6,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 22,
      "robustness": 9,
      "focus": 33,
      "vitality": 33
    },
    "poise": 3,
    "effect": "Strengthens Golden Order incantations",
    "weight": 2.2
  },
  {
    "id": "1040100",
    "name": "Goldmask's Rags",
    "category": "Chest",
    "image": "/equipment_images/armours/Goldmask's_Rags.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 2.7,
      "slash": 2.7,
      "pierce": 0.6,
      "magic": 11.9,
      "fire": 11.4,
      "lightning": 11.9,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 38,
      "robustness": 11,
      "focus": 60,
      "vitality": 60
    },
    "poise": 5,
    "weight": 2.4
  },
  {
    "id": "1040200",
    "name": "Gold Bracelets",
    "category": "Arms",
    "image": "/equipment_images/armours/Gold_Bracelets.webp",
    "dmgNegation": {
      "physical": 1,
      "strike": 0.6,
      "slash": 0.6,
      "pierce": 0.1,
      "magic": 2.9,
      "fire": 2.8,
      "lightning": 2.9,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 13,
      "robustness": 4,
      "focus": 20,
      "vitality": 20
    },
    "poise": 1,
    "weight": 0.8
  },
  {
    "id": "1040300",
    "name": "Gold Waistwrap",
    "category": "Legs",
    "image": "/equipment_images/armours/Gold_Waistwrap.webp",
    "dmgNegation": {
      "physical": 4,
      "strike": 3.8,
      "slash": 3.8,
      "pierce": 3,
      "magic": 7.6,
      "fire": 7.4,
      "lightning": 7.6,
      "holy": 8.1
    },
    "resistances": {
      "immunity": 35,
      "robustness": 15,
      "focus": 56,
      "vitality": 56
    },
    "poise": 7,
    "weight": 4.4
  },
  {
    "id": "1050100",
    "name": "Fell Omen Cloak",
    "category": "Chest",
    "image": "/equipment_images/armours/Fell_Omen_Cloak.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 6.7,
      "slash": 6.7,
      "pierce": 6.1,
      "magic": 13,
      "fire": 12.4,
      "lightning": 12.6,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 42,
      "robustness": 25,
      "focus": 71,
      "vitality": 83
    },
    "poise": 8,
    "weight": 5.1
  },
  {
    "id": "1060000",
    "name": "Albinauric Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Albinauric_Mask.webp",
    "dmgNegation": {
      "physical": 4,
      "strike": 3.1,
      "slash": 4,
      "pierce": 3.8,
      "magic": 2.5,
      "fire": 3.1,
      "lightning": 2.1,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 12,
      "robustness": 23,
      "focus": 10,
      "vitality": 10
    },
    "poise": 5,
    "effect": "Raises arcane, but reduces the HP recovery effects of the Flask of Crimson Tears",
    "statChanges": {
      "arcane": 4
    },
    "weight": 3.8
  },
  {
    "id": "1060100",
    "name": "Dirty Chainmail",
    "category": "Chest",
    "image": "/equipment_images/armours/Dirty_Chainmail.webp",
    "dmgNegation": {
      "physical": 11.4,
      "strike": 8.8,
      "slash": 11.9,
      "pierce": 11.4,
      "magic": 8,
      "fire": 8.8,
      "lightning": 6.1,
      "holy": 8
    },
    "resistances": {
      "immunity": 25,
      "robustness": 50,
      "focus": 21,
      "vitality": 21
    },
    "poise": 18,
    "weight": 8.8
  },
  {
    "id": "1070000",
    "name": "Zamor Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Zamor_Mask.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 3.4,
      "slash": 4.4,
      "pierce": 3.8,
      "magic": 3.1,
      "fire": 3.1,
      "lightning": 2.1,
      "holy": 2.8
    },
    "resistances": {
      "immunity": 9,
      "robustness": 27,
      "focus": 5,
      "vitality": 8
    },
    "poise": 6,
    "weight": 3.8
  },
  {
    "id": "1070100",
    "name": "Zamor Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Zamor_Armor.webp",
    "dmgNegation": {
      "physical": 11.9,
      "strike": 9.5,
      "slash": 12.4,
      "pierce": 10.9,
      "magic": 8.8,
      "fire": 8.8,
      "lightning": 6.1,
      "holy": 8
    },
    "resistances": {
      "immunity": 21,
      "robustness": 63,
      "focus": 11,
      "vitality": 18
    },
    "poise": 18,
    "weight": 8.8
  },
  {
    "id": "1070200",
    "name": "Zamor Bracelets",
    "category": "Arms",
    "image": "/equipment_images/armours/Zamor_Bracelets.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 2.1,
      "slash": 2.9,
      "pierce": 2.5,
      "magic": 1.9,
      "fire": 1.9,
      "lightning": 1.3,
      "holy": 1.7
    },
    "resistances": {
      "immunity": 6,
      "robustness": 20,
      "focus": 0,
      "vitality": 4
    },
    "poise": 4,
    "weight": 2.8
  },
  {
    "id": "1070300",
    "name": "Zamor Legwraps",
    "category": "Legs",
    "image": "/equipment_images/armours/Zamor_Legwraps.webp",
    "dmgNegation": {
      "physical": 6.5,
      "strike": 5,
      "slash": 6.8,
      "pierce": 5.8,
      "magic": 4.5,
      "fire": 4.5,
      "lightning": 3,
      "holy": 4
    },
    "resistances": {
      "immunity": 11,
      "robustness": 37,
      "focus": 0,
      "vitality": 7
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "1080000",
    "name": "Imp Head (Cat)",
    "category": "Head",
    "image": "/equipment_images/armours/Imp_Head_(Cat).webp",
    "dmgNegation": {
      "physical": 5.8,
      "strike": 5.2,
      "slash": 5.8,
      "pierce": 6.1,
      "magic": 5,
      "fire": 5.8,
      "lightning": 4.8,
      "holy": 5
    },
    "resistances": {
      "immunity": 35,
      "robustness": 35,
      "focus": 20,
      "vitality": 20
    },
    "poise": 10,
    "statChanges": {
      "intelligence": 2
    },
    "effect": "Increases intelligence",
    "weight": 8.1
  },
  {
    "id": "1081000",
    "name": "Imp Head (Fanged)",
    "category": "Head",
    "image": "/equipment_images/armours/Imp_Head_(Fanged).webp",
    "dmgNegation": {
      "physical": 5.8,
      "strike": 5.2,
      "slash": 5.8,
      "pierce": 6.1,
      "magic": 5,
      "fire": 5.8,
      "lightning": 4.8,
      "holy": 5
    },
    "resistances": {
      "immunity": 35,
      "robustness": 35,
      "focus": 20,
      "vitality": 20
    },
    "poise": 10,
    "statChanges": {
      "strength": 2
    },
    "effect": "Increases strength",
    "weight": 8.1
  },
  {
    "id": "1082000",
    "name": "Imp Head (Long-Tongued)",
    "category": "Head",
    "image": "/equipment_images/armours/Imp_Head_(Long-Tongued).webp",
    "dmgNegation": {
      "physical": 5.8,
      "strike": 5.2,
      "slash": 5.8,
      "pierce": 6.1,
      "magic": 5,
      "fire": 5.8,
      "lightning": 4.8,
      "holy": 5
    },
    "resistances": {
      "immunity": 35,
      "robustness": 35,
      "focus": 20,
      "vitality": 20
    },
    "poise": 10,
    "statChanges": {
      "dexterity": 2
    },
    "effect": "Increases dexterity",
    "weight": 8.1
  },
  {
    "id": "1083000",
    "name": "Imp Head (Corpse)",
    "category": "Head",
    "image": "/equipment_images/armours/Imp_Head_(Corpse).webp",
    "dmgNegation": {
      "physical": 5.8,
      "strike": 5.2,
      "slash": 5.8,
      "pierce": 6.1,
      "magic": 5,
      "fire": 5.8,
      "lightning": 4.8,
      "holy": 5
    },
    "resistances": {
      "immunity": 35,
      "robustness": 35,
      "focus": 20,
      "vitality": 20
    },
    "poise": 10,
    "statChanges": {
      "faith": 2
    },
    "effect": "Increases faith",
    "weight": 8.1
  },
  {
    "id": "1084000",
    "name": "Imp Head (Wolf)",
    "category": "Head",
    "image": "/equipment_images/armours/Imp_Head_(Wolf).webp",
    "dmgNegation": {
      "physical": 5.8,
      "strike": 5.2,
      "slash": 5.8,
      "pierce": 6.1,
      "magic": 5,
      "fire": 5.8,
      "lightning": 4.8,
      "holy": 5
    },
    "resistances": {
      "immunity": 35,
      "robustness": 35,
      "focus": 20,
      "vitality": 20
    },
    "poise": 10,
    "statChanges": {
      "endurance": 2
    },
    "effect": "Increases endurance",
    "weight": 8.1
  },
  {
    "id": "1085000",
    "name": "Imp Head (Elder)",
    "category": "Head",
    "image": "/equipment_images/armours/Imp_Head_(Elder).webp",
    "dmgNegation": {
      "physical": 5.8,
      "strike": 5.2,
      "slash": 5.8,
      "pierce": 6.1,
      "magic": 5,
      "fire": 5.8,
      "lightning": 4.8,
      "holy": 5
    },
    "resistances": {
      "immunity": 35,
      "robustness": 35,
      "focus": 20,
      "vitality": 20
    },
    "poise": 10,
    "statChanges": {
      "arcane": 2
    },
    "effect": "Increases arcane",
    "weight": 8.1
  },
  {
    "id": "1090000",
    "name": "Silver Tear Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Silver_Tear_Mask.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 3.6,
      "slash": 3.8,
      "pierce": 3.1,
      "magic": 5.5,
      "fire": 5.2,
      "lightning": 5,
      "holy": 5.3
    },
    "resistances": {
      "immunity": 26,
      "robustness": 20,
      "focus": 44,
      "vitality": 44
    },
    "poise": 6,
    "effect": "Greatly increases arcane to the detriment of physical attack power",
    "statChanges": {
      "arcane": 8
    },
    "weight": 4.6
  },
  {
    "id": "1100000",
    "name": "Chain Coif",
    "category": "Head",
    "image": "/equipment_images/armours/Chain_Coif.webp",
    "dmgNegation": {
      "physical": 4.2,
      "strike": 3.1,
      "slash": 4.6,
      "pierce": 4.2,
      "magic": 2.5,
      "fire": 3.8,
      "lightning": 2.1,
      "holy": 2.8
    },
    "resistances": {
      "immunity": 11,
      "robustness": 18,
      "focus": 5,
      "vitality": 8
    },
    "poise": 6,
    "weight": 3.8
  },
  {
    "id": "1100100",
    "name": "Chain Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Chain_Armor.webp",
    "dmgNegation": {
      "physical": 11.9,
      "strike": 8.8,
      "slash": 12.9,
      "pierce": 11.9,
      "magic": 7.1,
      "fire": 10.9,
      "lightning": 6.1,
      "holy": 8
    },
    "resistances": {
      "immunity": 25,
      "robustness": 42,
      "focus": 11,
      "vitality": 18
    },
    "poise": 17,
    "weight": 8.8
  },
  {
    "id": "1100300",
    "name": "Chain Leggings",
    "category": "Legs",
    "image": "/equipment_images/armours/Chain_Leggings.webp",
    "dmgNegation": {
      "physical": 6.8,
      "strike": 5,
      "slash": 7.4,
      "pierce": 6.8,
      "magic": 4,
      "fire": 6.2,
      "lightning": 3.4,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 16,
      "robustness": 26,
      "focus": 7,
      "vitality": 11
    },
    "poise": 10,
    "weight": 5.5
  },
  {
    "id": "1101000",
    "name": "Greathelm",
    "category": "Head",
    "image": "/equipment_images/armours/Greathelm.webp",
    "dmgNegation": {
      "physical": 5.5,
      "strike": 4.2,
      "slash": 5.8,
      "pierce": 5.2,
      "magic": 4.2,
      "fire": 4.6,
      "lightning": 3.8,
      "holy": 4.2
    },
    "resistances": {
      "immunity": 16,
      "robustness": 29,
      "focus": 11,
      "vitality": 11
    },
    "poise": 9,
    "weight": 5.9
  },
  {
    "id": "1101100",
    "name": "Eye Surcoat",
    "category": "Chest",
    "image": "/equipment_images/armours/Eye_Surcoat.webp",
    "dmgNegation": {
      "physical": 12.9,
      "strike": 8.8,
      "slash": 12.9,
      "pierce": 11.9,
      "magic": 8.8,
      "fire": 10.9,
      "lightning": 7.1,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 25,
      "robustness": 55,
      "focus": 21,
      "vitality": 18
    },
    "poise": 21,
    "weight": 9.2
  },
  {
    "id": "1102100",
    "name": "Tree Surcoat",
    "category": "Chest",
    "image": "/equipment_images/armours/Tree_Surcoat.webp",
    "dmgNegation": {
      "physical": 12.9,
      "strike": 8.8,
      "slash": 12.9,
      "pierce": 11.9,
      "magic": 8.8,
      "fire": 10.9,
      "lightning": 7.1,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 25,
      "robustness": 55,
      "focus": 21,
      "vitality": 18
    },
    "poise": 21,
    "weight": 9.2
  },
  {
    "id": "1110000",
    "name": "Octopus Head",
    "category": "Head",
    "image": "/equipment_images/armours/Octopus_Head.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 5.4,
      "slash": 2.8,
      "pierce": 2.8,
      "magic": 4,
      "fire": 3.6,
      "lightning": 4,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 31,
      "robustness": 14,
      "focus": 23,
      "vitality": 23
    },
    "poise": 5,
    "weight": 3.6
  },
  {
    "id": "1120000",
    "name": "Jar",
    "category": "Head",
    "image": "/equipment_images/armours/Jar.webp",
    "dmgNegation": {
      "physical": 6.8,
      "strike": 3.4,
      "slash": 7,
      "pierce": 6.8,
      "magic": 4.7,
      "fire": 4.9,
      "lightning": 4.6,
      "holy": 4.7
    },
    "resistances": {
      "immunity": 24,
      "robustness": 33,
      "focus": 16,
      "vitality": 15
    },
    "poise": 10,
    "effect": "In a uniquely jarlike gesture of friendship, it boosts the power of throwing pot items",
    "weight": 6.8
  },
  {
    "id": "1130000",
    "name": "Mushroom Head",
    "category": "Head",
    "image": "/equipment_images/armours/Mushroom_Head.webp",
    "dmgNegation": {
      "physical": 2.1,
      "strike": 2.5,
      "slash": 0.9,
      "pierce": 1.8,
      "magic": 4.7,
      "fire": 1.8,
      "lightning": 4.6,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 44,
      "robustness": 10,
      "focus": 39,
      "vitality": 33
    },
    "poise": 2,
    "weight": 2.2
  },
  {
    "id": "1130100",
    "name": "Mushroom Body",
    "category": "Chest",
    "image": "/equipment_images/armours/Mushroom_Body.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 7.1,
      "slash": 2.7,
      "pierce": 5.3,
      "magic": 13.3,
      "fire": 5.3,
      "lightning": 12.8,
      "holy": 13
    },
    "resistances": {
      "immunity": 102,
      "robustness": 24,
      "focus": 90,
      "vitality": 76
    },
    "poise": 5,
    "weight": 5.1
  },
  {
    "id": "1130200",
    "name": "Mushroom Arms",
    "category": "Arms",
    "image": "/equipment_images/armours/Mushroom_Arms.webp",
    "dmgNegation": {
      "physical": 1.5,
      "strike": 1.7,
      "slash": 0.6,
      "pierce": 1.3,
      "magic": 3.3,
      "fire": 1.3,
      "lightning": 3.2,
      "holy": 3.2
    },
    "resistances": {
      "immunity": 34,
      "robustness": 8,
      "focus": 30,
      "vitality": 25
    },
    "poise": 1,
    "weight": 1.7
  },
  {
    "id": "1130300",
    "name": "Mushroom Legs",
    "category": "Legs",
    "image": "/equipment_images/armours/Mushroom_Legs.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 4,
      "slash": 1.5,
      "pierce": 3,
      "magic": 7.6,
      "fire": 3,
      "lightning": 7.3,
      "holy": 7.4
    },
    "resistances": {
      "immunity": 63,
      "robustness": 15,
      "focus": 56,
      "vitality": 47
    },
    "poise": 3,
    "weight": 3.1
  },
  {
    "id": "1300000",
    "name": "Nox Mirrorhelm",
    "category": "Head",
    "image": "/equipment_images/armours/Nox_Mirrorhelm.webp",
    "dmgNegation": {
      "physical": 4,
      "strike": 3.4,
      "slash": 5.5,
      "pierce": 5,
      "magic": 6.7,
      "fire": 5.3,
      "lightning": 4.2,
      "holy": 5.3
    },
    "resistances": {
      "immunity": 29,
      "robustness": 33,
      "focus": 26,
      "vitality": 42
    },
    "poise": 6,
    "weight": 7.5
  },
  {
    "id": "1301000",
    "name": "Iji's Mirrorhelm",
    "category": "Head",
    "image": "/equipment_images/armours/Iji's_Mirrorhelm.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 3.8,
      "slash": 5.2,
      "pierce": 5.2,
      "magic": 6.2,
      "fire": 4.6,
      "lightning": 4.8,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 22,
      "robustness": 42,
      "focus": 26,
      "vitality": 39
    },
    "poise": 7,
    "weight": 7.5
  },
  {
    "id": "1400000",
    "name": "Black Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Black_Hood.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 3.1,
      "slash": 3.1,
      "pierce": 3.1,
      "magic": 3.1,
      "fire": 3.4,
      "lightning": 3.6,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 33,
      "robustness": 16,
      "focus": 16,
      "vitality": 18
    },
    "poise": 4,
    "weight": 3
  },
  {
    "id": "1400100",
    "name": "Leather Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Leather_Armor.webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 9.5,
      "slash": 8,
      "pierce": 8.8,
      "magic": 9.5,
      "fire": 9.5,
      "lightning": 10.2,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 60,
      "robustness": 35,
      "focus": 42,
      "vitality": 50
    },
    "poise": 12,
    "weight": 7.1
  },
  {
    "id": "1400200",
    "name": "Leather Gloves",
    "category": "Arms",
    "image": "/equipment_images/armours/Leather_Gloves.webp",
    "dmgNegation": {
      "physical": 1.9,
      "strike": 2.3,
      "slash": 1.9,
      "pierce": 2.1,
      "magic": 2.3,
      "fire": 2.3,
      "lightning": 2.5,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 20,
      "robustness": 12,
      "focus": 14,
      "vitality": 17
    },
    "poise": 3,
    "weight": 2.4
  },
  {
    "id": "1400300",
    "name": "Leather Boots",
    "category": "Legs",
    "image": "/equipment_images/armours/Leather_Boots.webp",
    "dmgNegation": {
      "physical": 4.5,
      "strike": 5.4,
      "slash": 4.5,
      "pierce": 5,
      "magic": 5.4,
      "fire": 5.4,
      "lightning": 5.8,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 37,
      "robustness": 22,
      "focus": 26,
      "vitality": 31
    },
    "poise": 7,
    "weight": 4.4
  },
  {
    "id": "1401000",
    "name": "Bandit Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Bandit_Mask.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 3.1,
      "slash": 3.1,
      "pierce": 3.1,
      "magic": 3.1,
      "fire": 3.4,
      "lightning": 3.6,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 30,
      "robustness": 14,
      "focus": 14,
      "vitality": 16
    },
    "poise": 4,
    "weight": 3
  },
  {
    "id": "1500000",
    "name": "Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Knight_Helm.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 4.2,
      "slash": 4.8,
      "pierce": 4.8,
      "magic": 3.8,
      "fire": 3.8,
      "lightning": 3.4,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 12,
      "robustness": 22,
      "focus": 8,
      "vitality": 8
    },
    "poise": 8,
    "weight": 4.6
  },
  {
    "id": "1500100",
    "name": "Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Knight_Armor.webp",
    "dmgNegation": {
      "physical": 12.4,
      "strike": 11.9,
      "slash": 13.5,
      "pierce": 13.5,
      "magic": 10.9,
      "fire": 10.9,
      "lightning": 9.5,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 28,
      "robustness": 50,
      "focus": 18,
      "vitality": 18
    },
    "poise": 24,
    "weight": 10.6
  },
  {
    "id": "1500200",
    "name": "Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.1,
      "strike": 2.9,
      "slash": 3.3,
      "pierce": 3.3,
      "magic": 2.7,
      "fire": 2.7,
      "lightning": 2.3,
      "holy": 2.1
    },
    "resistances": {
      "immunity": 9,
      "robustness": 17,
      "focus": 6,
      "vitality": 6
    },
    "poise": 5,
    "weight": 3.5
  },
  {
    "id": "1500300",
    "name": "Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 7.1,
      "strike": 6.8,
      "slash": 7.7,
      "pierce": 7.7,
      "magic": 6.2,
      "fire": 6.2,
      "lightning": 5.4,
      "holy": 5
    },
    "resistances": {
      "immunity": 17,
      "robustness": 31,
      "focus": 11,
      "vitality": 11
    },
    "poise": 14,
    "weight": 6.6
  },
  {
    "id": "1600000",
    "name": "Greathood",
    "category": "Head",
    "image": "/equipment_images/armours/Greathood.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 3.6,
      "slash": 3.8,
      "pierce": 3.6,
      "magic": 5.5,
      "fire": 5,
      "lightning": 5.5,
      "holy": 6.2
    },
    "resistances": {
      "immunity": 33,
      "robustness": 20,
      "focus": 47,
      "vitality": 47
    },
    "poise": 5,
    "effect": "Increases intelligence and faith to the detriment of HP",
    "statChanges": {
      "maxHp": 0.91,
      "intelligence": 2,
      "faith": 2
    },
    "weight": 5.1
  },
  {
    "id": "1700000",
    "name": "Godrick Soldier Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Godrick_Soldier_Helm.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.6,
      "slash": 4.4,
      "pierce": 4.2,
      "magic": 3.1,
      "fire": 3.6,
      "lightning": 2.5,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 12,
      "robustness": 22,
      "focus": 9,
      "vitality": 9
    },
    "poise": 7,
    "weight": 4
  },
  {
    "id": "1700100",
    "name": "Tree-and-Beast Surcoat",
    "category": "Chest",
    "image": "/equipment_images/armours/Tree-and-Beast_Surcoat.webp",
    "dmgNegation": {
      "physical": 12.9,
      "strike": 11.4,
      "slash": 12.9,
      "pierce": 12.4,
      "magic": 10.2,
      "fire": 10.9,
      "lightning": 8,
      "holy": 9.5
    },
    "resistances": {
      "immunity": 32,
      "robustness": 55,
      "focus": 23,
      "vitality": 23
    },
    "poise": 22,
    "weight": 10.6
  },
  {
    "id": "1700200",
    "name": "Godrick Soldier Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Godrick_Soldier_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.2,
      "strike": 2.8,
      "slash": 3.2,
      "pierce": 3.1,
      "magic": 2.5,
      "fire": 2.7,
      "lightning": 1.9,
      "holy": 2.3
    },
    "resistances": {
      "immunity": 11,
      "robustness": 18,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.5
  },
  {
    "id": "1700300",
    "name": "Godrick Soldier Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Godrick_Soldier_Greaves.webp",
    "dmgNegation": {
      "physical": 7.4,
      "strike": 6.5,
      "slash": 7.4,
      "pierce": 7.1,
      "magic": 5.8,
      "fire": 6.2,
      "lightning": 4.5,
      "holy": 5.4
    },
    "resistances": {
      "immunity": 20,
      "robustness": 34,
      "focus": 14,
      "vitality": 14
    },
    "poise": 13,
    "weight": 6.6
  },
  {
    "id": "1710000",
    "name": "Raya Lucarian Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Raya_Lucarian_Helm.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.4,
      "slash": 4.6,
      "pierce": 4.4,
      "magic": 3.4,
      "fire": 3.6,
      "lightning": 2.3,
      "holy": 2.8
    },
    "resistances": {
      "immunity": 12,
      "robustness": 22,
      "focus": 9,
      "vitality": 9
    },
    "poise": 7,
    "weight": 4
  },
  {
    "id": "1710100",
    "name": "Cuckoo Surcoat",
    "category": "Chest",
    "image": "/equipment_images/armours/Cuckoo_Surcoat.webp",
    "dmgNegation": {
      "physical": 12.9,
      "strike": 10.9,
      "slash": 13.5,
      "pierce": 12.9,
      "magic": 11.9,
      "fire": 10.9,
      "lightning": 7.1,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 28,
      "robustness": 55,
      "focus": 23,
      "vitality": 23
    },
    "poise": 22,
    "weight": 10.6
  },
  {
    "id": "1710200",
    "name": "Raya Lucarian Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Raya_Lucarian_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.2,
      "strike": 2.7,
      "slash": 3.3,
      "pierce": 3.2,
      "magic": 2.7,
      "fire": 2.7,
      "lightning": 1.7,
      "holy": 2.1
    },
    "resistances": {
      "immunity": 11,
      "robustness": 18,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.5
  },
  {
    "id": "1710300",
    "name": "Raya Lucarian Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Raya_Lucarian_Greaves.webp",
    "dmgNegation": {
      "physical": 7.4,
      "strike": 6.2,
      "slash": 7.7,
      "pierce": 7.4,
      "magic": 6.2,
      "fire": 6.2,
      "lightning": 4,
      "holy": 5
    },
    "resistances": {
      "immunity": 20,
      "robustness": 34,
      "focus": 14,
      "vitality": 14
    },
    "poise": 13,
    "weight": 6.6
  },
  {
    "id": "1720000",
    "name": "Leyndell Soldier Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Leyndell_Soldier_Helm.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.8,
      "slash": 4.2,
      "pierce": 4.4,
      "magic": 2.8,
      "fire": 3.4,
      "lightning": 2.8,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 12,
      "robustness": 22,
      "focus": 9,
      "vitality": 9
    },
    "poise": 7,
    "weight": 4
  },
  {
    "id": "1720100",
    "name": "Erdtree Surcoat",
    "category": "Chest",
    "image": "/equipment_images/armours/Erdtree_Surcoat.webp",
    "dmgNegation": {
      "physical": 12.9,
      "strike": 11.9,
      "slash": 12.4,
      "pierce": 12.9,
      "magic": 9.5,
      "fire": 10.2,
      "lightning": 8.8,
      "holy": 9.5
    },
    "resistances": {
      "immunity": 32,
      "robustness": 55,
      "focus": 23,
      "vitality": 23
    },
    "poise": 22,
    "weight": 10.6
  },
  {
    "id": "1720200",
    "name": "Leyndell Soldier Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Leyndell_Soldier_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.2,
      "strike": 2.9,
      "slash": 3.1,
      "pierce": 3.2,
      "magic": 2.3,
      "fire": 2.5,
      "lightning": 2.1,
      "holy": 2.3
    },
    "resistances": {
      "immunity": 11,
      "robustness": 18,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.5
  },
  {
    "id": "1720300",
    "name": "Leyndell Soldier Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Leyndell_Soldier_Greaves.webp",
    "dmgNegation": {
      "physical": 7.4,
      "strike": 6.8,
      "slash": 7.1,
      "pierce": 7.4,
      "magic": 5.4,
      "fire": 5.8,
      "lightning": 5,
      "holy": 5.4
    },
    "resistances": {
      "immunity": 20,
      "robustness": 34,
      "focus": 14,
      "vitality": 14
    },
    "poise": 13,
    "weight": 6.6
  },
  {
    "id": "1730000",
    "name": "Radahn Soldier Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Radahn_Soldier_Helm.webp",
    "dmgNegation": {
      "physical": 4.6,
      "strike": 3.4,
      "slash": 4.2,
      "pierce": 4,
      "magic": 3.1,
      "fire": 3.8,
      "lightning": 2.5,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 12,
      "robustness": 20,
      "focus": 9,
      "vitality": 10
    },
    "poise": 7,
    "weight": 4
  },
  {
    "id": "1730100",
    "name": "Redmane Surcoat",
    "category": "Chest",
    "image": "/equipment_images/armours/Redmane_Surcoat.webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 10.9,
      "slash": 12.4,
      "pierce": 11.9,
      "magic": 10.2,
      "fire": 11.4,
      "lightning": 8,
      "holy": 9.5
    },
    "resistances": {
      "immunity": 32,
      "robustness": 50,
      "focus": 23,
      "vitality": 24
    },
    "poise": 22,
    "weight": 10.6
  },
  {
    "id": "1730200",
    "name": "Radahn Soldier Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Radahn_Soldier_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.3,
      "strike": 2.7,
      "slash": 3.1,
      "pierce": 2.9,
      "magic": 2.5,
      "fire": 2.8,
      "lightning": 1.9,
      "holy": 2.3
    },
    "resistances": {
      "immunity": 11,
      "robustness": 17,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.5
  },
  {
    "id": "1730300",
    "name": "Radahn Soldier Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Radahn_Soldier_Greaves.webp",
    "dmgNegation": {
      "physical": 7.7,
      "strike": 6.2,
      "slash": 7.1,
      "pierce": 6.8,
      "magic": 5.8,
      "fire": 6.5,
      "lightning": 4.5,
      "holy": 5.4
    },
    "resistances": {
      "immunity": 20,
      "robustness": 31,
      "focus": 14,
      "vitality": 15
    },
    "poise": 13,
    "weight": 6.6
  },
  {
    "id": "1740100",
    "name": "Mausoleum Surcoat",
    "category": "Chest",
    "image": "/equipment_images/armours/Mausoleum_Surcoat.webp",
    "dmgNegation": {
      "physical": 12.9,
      "strike": 10.9,
      "slash": 13.5,
      "pierce": 12.4,
      "magic": 10.2,
      "fire": 10.2,
      "lightning": 8.8,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 32,
      "robustness": 50,
      "focus": 23,
      "vitality": 21
    },
    "poise": 24,
    "weight": 10.6
  },
  {
    "id": "1740200",
    "name": "Mausoleum Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Mausoleum_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.2,
      "strike": 2.7,
      "slash": 3.3,
      "pierce": 3.1,
      "magic": 2.5,
      "fire": 2.5,
      "lightning": 2.1,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 11,
      "robustness": 17,
      "focus": 8,
      "vitality": 7
    },
    "poise": 5,
    "weight": 3.5
  },
  {
    "id": "1740300",
    "name": "Mausoleum Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Mausoleum_Greaves.webp",
    "dmgNegation": {
      "physical": 7.4,
      "strike": 6.2,
      "slash": 7.7,
      "pierce": 7.1,
      "magic": 5.8,
      "fire": 5.8,
      "lightning": 5,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 20,
      "robustness": 31,
      "focus": 14,
      "vitality": 13
    },
    "poise": 14,
    "weight": 6.6
  },
  {
    "id": "1750000",
    "name": "Haligtree Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Haligtree_Helm.webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 3.8,
      "slash": 4.2,
      "pierce": 4.4,
      "magic": 2.8,
      "fire": 3.4,
      "lightning": 2.5,
      "holy": 3.4
    },
    "resistances": {
      "immunity": 12,
      "robustness": 22,
      "focus": 9,
      "vitality": 10
    },
    "poise": 6,
    "effect": "Increases faith",
    "statChanges": {
      "faith": 1
    },
    "weight": 4
  },
  {
    "id": "1750100",
    "name": "Haligtree Crest Surcoat",
    "category": "Chest",
    "image": "/equipment_images/armours/Haligtree_Crest_Surcoat.webp",
    "dmgNegation": {
      "physical": 12.9,
      "strike": 11.9,
      "slash": 12.4,
      "pierce": 12.9,
      "magic": 9.5,
      "fire": 10.2,
      "lightning": 8,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 32,
      "robustness": 55,
      "focus": 23,
      "vitality": 24
    },
    "poise": 21,
    "weight": 10.6
  },
  {
    "id": "1750200",
    "name": "Haligtree Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Haligtree_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.2,
      "strike": 2.9,
      "slash": 3.1,
      "pierce": 3.2,
      "magic": 2.3,
      "fire": 2.5,
      "lightning": 1.9,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 11,
      "robustness": 18,
      "focus": 8,
      "vitality": 8
    },
    "poise": 4,
    "weight": 3.5
  },
  {
    "id": "1750300",
    "name": "Haligtree Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Haligtree_Greaves.webp",
    "dmgNegation": {
      "physical": 7.4,
      "strike": 6.8,
      "slash": 7.1,
      "pierce": 7.4,
      "magic": 5.4,
      "fire": 5.8,
      "lightning": 4.5,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 20,
      "robustness": 34,
      "focus": 14,
      "vitality": 15
    },
    "poise": 12,
    "weight": 6.6
  },
  {
    "id": "1760000",
    "name": "Gelmir Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Gelmir_Knight_Helm.webp",
    "dmgNegation": {
      "physical": 4.8,
      "strike": 4,
      "slash": 5,
      "pierce": 4.8,
      "magic": 3.8,
      "fire": 4.4,
      "lightning": 3.6,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 15,
      "robustness": 23,
      "focus": 10,
      "vitality": 10
    },
    "poise": 8,
    "weight": 5.1
  },
  {
    "id": "1760100",
    "name": "Gelmir Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Gelmir_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 11.4,
      "slash": 14,
      "pierce": 13.5,
      "magic": 10.9,
      "fire": 12.4,
      "lightning": 10.2,
      "holy": 10.9
    },
    "resistances": {
      "immunity": 35,
      "robustness": 55,
      "focus": 24,
      "vitality": 23
    },
    "poise": 24,
    "weight": 11.8
  },
  {
    "id": "1760200",
    "name": "Gelmir Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Gelmir_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.3,
      "strike": 2.8,
      "slash": 3.5,
      "pierce": 3.3,
      "magic": 2.7,
      "fire": 3.1,
      "lightning": 2.5,
      "holy": 2.7
    },
    "resistances": {
      "immunity": 12,
      "robustness": 18,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.9
  },
  {
    "id": "1760300",
    "name": "Gelmir Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Gelmir_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 7.7,
      "strike": 6.5,
      "slash": 8,
      "pierce": 7.7,
      "magic": 6.2,
      "fire": 7.1,
      "lightning": 5.8,
      "holy": 6.2
    },
    "resistances": {
      "immunity": 22,
      "robustness": 34,
      "focus": 15,
      "vitality": 14
    },
    "poise": 14,
    "weight": 7.3
  },
  {
    "id": "1761100",
    "name": "Gelmir Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Gelmir_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 13.1,
      "strike": 11,
      "slash": 13.6,
      "pierce": 13.1,
      "magic": 10.5,
      "fire": 12,
      "lightning": 9.8,
      "holy": 10.5
    },
    "resistances": {
      "immunity": 32,
      "robustness": 50,
      "focus": 21,
      "vitality": 21
    },
    "poise": 24,
    "weight": 10.8
  },
  {
    "id": "1770000",
    "name": "Godrick Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Godrick_Knight_Helm.webp",
    "dmgNegation": {
      "physical": 4.8,
      "strike": 4.2,
      "slash": 5,
      "pierce": 4.6,
      "magic": 3.8,
      "fire": 4.2,
      "lightning": 3.4,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 15,
      "robustness": 24,
      "focus": 10,
      "vitality": 10
    },
    "poise": 8,
    "weight": 5.1
  },
  {
    "id": "1770100",
    "name": "Godrick Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Godrick_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 11.9,
      "slash": 14,
      "pierce": 12.9,
      "magic": 10.9,
      "fire": 11.9,
      "lightning": 9.5,
      "holy": 10.9
    },
    "resistances": {
      "immunity": 35,
      "robustness": 57,
      "focus": 24,
      "vitality": 24
    },
    "poise": 24,
    "weight": 11.8
  },
  {
    "id": "1770200",
    "name": "Godrick Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Godrick_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.3,
      "strike": 2.9,
      "slash": 3.5,
      "pierce": 3.2,
      "magic": 2.7,
      "fire": 2.9,
      "lightning": 2.3,
      "holy": 2.7
    },
    "resistances": {
      "immunity": 12,
      "robustness": 19,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.9
  },
  {
    "id": "1770300",
    "name": "Godrick Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Godrick_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 7.7,
      "strike": 6.8,
      "slash": 8,
      "pierce": 7.4,
      "magic": 6.2,
      "fire": 6.8,
      "lightning": 5.4,
      "holy": 6.2
    },
    "resistances": {
      "immunity": 22,
      "robustness": 35,
      "focus": 15,
      "vitality": 15
    },
    "poise": 14,
    "weight": 7.3
  },
  {
    "id": "1771100",
    "name": "Godrick Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Godrick_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 13.1,
      "strike": 11.5,
      "slash": 13.6,
      "pierce": 12.5,
      "magic": 10.5,
      "fire": 11.5,
      "lightning": 9.1,
      "holy": 10.5
    },
    "resistances": {
      "immunity": 32,
      "robustness": 52,
      "focus": 21,
      "vitality": 21
    },
    "poise": 24,
    "weight": 10.8
  },
  {
    "id": "1780000",
    "name": "Cuckoo Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Cuckoo_Knight_Helm.webp",
    "dmgNegation": {
      "physical": 4.8,
      "strike": 4,
      "slash": 5.2,
      "pierce": 4.8,
      "magic": 4.4,
      "fire": 4.2,
      "lightning": 3.1,
      "holy": 3.6
    },
    "resistances": {
      "immunity": 14,
      "robustness": 24,
      "focus": 10,
      "vitality": 10
    },
    "poise": 8,
    "weight": 5.1
  },
  {
    "id": "1780100",
    "name": "Cuckoo Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Cuckoo_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 11.4,
      "slash": 14.6,
      "pierce": 13.5,
      "magic": 12.4,
      "fire": 11.9,
      "lightning": 8.8,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 32,
      "robustness": 57,
      "focus": 24,
      "vitality": 24
    },
    "poise": 24,
    "weight": 11.8
  },
  {
    "id": "1780200",
    "name": "Cuckoo Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Cuckoo_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.3,
      "strike": 2.8,
      "slash": 3.6,
      "pierce": 3.3,
      "magic": 3.1,
      "fire": 2.9,
      "lightning": 2.1,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 11,
      "robustness": 19,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.9
  },
  {
    "id": "1780300",
    "name": "Cuckoo Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Cuckoo_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 7.7,
      "strike": 6.5,
      "slash": 8.4,
      "pierce": 7.7,
      "magic": 7.1,
      "fire": 6.8,
      "lightning": 5,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 20,
      "robustness": 35,
      "focus": 15,
      "vitality": 15
    },
    "poise": 14,
    "weight": 7.3
  },
  {
    "id": "1781100",
    "name": "Cuckoo Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Cuckoo_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 13.1,
      "strike": 11,
      "slash": 14.2,
      "pierce": 13.1,
      "magic": 12,
      "fire": 11.5,
      "lightning": 8.4,
      "holy": 9.8
    },
    "resistances": {
      "immunity": 29,
      "robustness": 52,
      "focus": 21,
      "vitality": 21
    },
    "poise": 24,
    "weight": 10.8
  },
  {
    "id": "1790000",
    "name": "Leyndell Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Leyndell_Knight_Helm.webp",
    "dmgNegation": {
      "physical": 4.8,
      "strike": 4.4,
      "slash": 4.8,
      "pierce": 4.8,
      "magic": 3.6,
      "fire": 4,
      "lightning": 3.6,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 15,
      "robustness": 24,
      "focus": 10,
      "vitality": 10
    },
    "poise": 8,
    "weight": 5.1
  },
  {
    "id": "1790100",
    "name": "Leyndell Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Leyndell_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 12.4,
      "slash": 13.5,
      "pierce": 13.5,
      "magic": 10.2,
      "fire": 11.4,
      "lightning": 11.4,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 35,
      "robustness": 55,
      "focus": 24,
      "vitality": 24
    },
    "poise": 24,
    "weight": 11.8
  },
  {
    "id": "1790200",
    "name": "Leyndell Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Leyndell_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.3,
      "strike": 3.1,
      "slash": 3.3,
      "pierce": 3.3,
      "magic": 2.5,
      "fire": 2.8,
      "lightning": 2.5,
      "holy": 2.7
    },
    "resistances": {
      "immunity": 12,
      "robustness": 19,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.9
  },
  {
    "id": "1790300",
    "name": "Leyndell Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Leyndell_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 7.7,
      "strike": 7.1,
      "slash": 7.7,
      "pierce": 7.7,
      "magic": 5.8,
      "fire": 6.5,
      "lightning": 5.8,
      "holy": 6.2
    },
    "resistances": {
      "immunity": 22,
      "robustness": 35,
      "focus": 15,
      "vitality": 15
    },
    "poise": 14,
    "weight": 7.3
  },
  {
    "id": "1791100",
    "name": "Leyndell Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Leyndell_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 13.1,
      "strike": 12,
      "slash": 13.1,
      "pierce": 13.1,
      "magic": 9.8,
      "fire": 11,
      "lightning": 11,
      "holy": 9.8
    },
    "resistances": {
      "immunity": 32,
      "robustness": 50,
      "focus": 21,
      "vitality": 21
    },
    "poise": 24,
    "weight": 10.8
  },
  {
    "id": "1800000",
    "name": "Redmane Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Redmane_Knight_Helm.webp",
    "dmgNegation": {
      "physical": 5,
      "strike": 4,
      "slash": 4.8,
      "pierce": 4.4,
      "magic": 3.8,
      "fire": 4.4,
      "lightning": 3.4,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 15,
      "robustness": 23,
      "focus": 10,
      "vitality": 11
    },
    "poise": 8,
    "weight": 5.1
  },
  {
    "id": "1800100",
    "name": "Redmane Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Redmane_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 11.4,
      "slash": 13.5,
      "pierce": 12.4,
      "magic": 10.9,
      "fire": 12.8,
      "lightning": 9.5,
      "holy": 10.9
    },
    "resistances": {
      "immunity": 35,
      "robustness": 55,
      "focus": 24,
      "vitality": 25
    },
    "poise": 24,
    "weight": 11.8
  },
  {
    "id": "1800200",
    "name": "Redmane Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Redmane_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.5,
      "strike": 2.8,
      "slash": 3.3,
      "pierce": 3.1,
      "magic": 2.7,
      "fire": 3.1,
      "lightning": 2.3,
      "holy": 2.7
    },
    "resistances": {
      "immunity": 12,
      "robustness": 18,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.9
  },
  {
    "id": "1800300",
    "name": "Redmane Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Redmane_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 7.7,
      "strike": 6.5,
      "slash": 7.7,
      "pierce": 7.1,
      "magic": 6.2,
      "fire": 7.3,
      "lightning": 5.4,
      "holy": 6.2
    },
    "resistances": {
      "immunity": 22,
      "robustness": 34,
      "focus": 15,
      "vitality": 15
    },
    "poise": 14,
    "weight": 7.3
  },
  {
    "id": "1801100",
    "name": "Redmane Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Redmane_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 13.1,
      "strike": 11,
      "slash": 13.1,
      "pierce": 12,
      "magic": 10.5,
      "fire": 12.4,
      "lightning": 9.1,
      "holy": 10.5
    },
    "resistances": {
      "immunity": 32,
      "robustness": 50,
      "focus": 21,
      "vitality": 22
    },
    "poise": 24,
    "weight": 10.8
  },
  {
    "id": "1810100",
    "name": "Mausoleum Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Mausoleum_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 11.4,
      "slash": 14.6,
      "pierce": 12.9,
      "magic": 10.9,
      "fire": 11.4,
      "lightning": 10.2,
      "holy": 11.4
    },
    "resistances": {
      "immunity": 35,
      "robustness": 55,
      "focus": 24,
      "vitality": 23
    },
    "poise": 25,
    "weight": 11.8
  },
  {
    "id": "1810200",
    "name": "Mausoleum Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Mausoleum_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.3,
      "strike": 2.8,
      "slash": 3.6,
      "pierce": 3.2,
      "magic": 2.7,
      "fire": 2.8,
      "lightning": 2.5,
      "holy": 2.8
    },
    "resistances": {
      "immunity": 12,
      "robustness": 18,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.9
  },
  {
    "id": "1810300",
    "name": "Mausoleum Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Mausoleum_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 7.7,
      "strike": 6.5,
      "slash": 8.4,
      "pierce": 7.4,
      "magic": 6.2,
      "fire": 6.5,
      "lightning": 5.8,
      "holy": 6.5
    },
    "resistances": {
      "immunity": 22,
      "robustness": 34,
      "focus": 15,
      "vitality": 14
    },
    "poise": 15,
    "weight": 7.3
  },
  {
    "id": "1811100",
    "name": "Mausoleum Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Mausoleum_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 13.1,
      "strike": 11,
      "slash": 14.2,
      "pierce": 12.5,
      "magic": 10.5,
      "fire": 11,
      "lightning": 9.8,
      "holy": 11
    },
    "resistances": {
      "immunity": 32,
      "robustness": 50,
      "focus": 21,
      "vitality": 21
    },
    "poise": 25,
    "weight": 10.8
  },
  {
    "id": "1820000",
    "name": "Haligtree Knight Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Haligtree_Knight_Helm.webp",
    "dmgNegation": {
      "physical": 4.8,
      "strike": 4.4,
      "slash": 4.8,
      "pierce": 4.8,
      "magic": 3.6,
      "fire": 4,
      "lightning": 3.4,
      "holy": 4
    },
    "resistances": {
      "immunity": 15,
      "robustness": 24,
      "focus": 10,
      "vitality": 11
    },
    "poise": 7,
    "effect": "Increases faith",
    "statChanges": {
      "faith": 2
    },
    "weight": 5.1
  },
  {
    "id": "1820100",
    "name": "Haligtree Knight Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Haligtree_Knight_Armor.webp",
    "dmgNegation": {
      "physical": 13.5,
      "strike": 12.4,
      "slash": 13.5,
      "pierce": 13.5,
      "magic": 10.2,
      "fire": 11.4,
      "lightning": 9.5,
      "holy": 11.4
    },
    "resistances": {
      "immunity": 35,
      "robustness": 57,
      "focus": 24,
      "vitality": 25
    },
    "poise": 22,
    "weight": 11.8
  },
  {
    "id": "1820200",
    "name": "Haligtree Knight Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Haligtree_Knight_Gauntlets.webp",
    "dmgNegation": {
      "physical": 3.3,
      "strike": 3.1,
      "slash": 3.3,
      "pierce": 3.3,
      "magic": 2.5,
      "fire": 2.8,
      "lightning": 2.3,
      "holy": 2.8
    },
    "resistances": {
      "immunity": 12,
      "robustness": 19,
      "focus": 8,
      "vitality": 8
    },
    "poise": 5,
    "weight": 3.9
  },
  {
    "id": "1820300",
    "name": "Haligtree Knight Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Haligtree_Knight_Greaves.webp",
    "dmgNegation": {
      "physical": 7.7,
      "strike": 7.1,
      "slash": 7.7,
      "pierce": 7.7,
      "magic": 5.8,
      "fire": 6.5,
      "lightning": 5.4,
      "holy": 6.5
    },
    "resistances": {
      "immunity": 22,
      "robustness": 35,
      "focus": 15,
      "vitality": 15
    },
    "poise": 13,
    "weight": 7.3
  },
  {
    "id": "1821100",
    "name": "Haligtree Knight Armor (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Haligtree_Knight_Armor_(Altered).webp",
    "dmgNegation": {
      "physical": 13.1,
      "strike": 12,
      "slash": 13.1,
      "pierce": 13.1,
      "magic": 9.8,
      "fire": 11,
      "lightning": 9.1,
      "holy": 11
    },
    "resistances": {
      "immunity": 32,
      "robustness": 52,
      "focus": 21,
      "vitality": 22
    },
    "poise": 22,
    "weight": 10.8
  },
  {
    "id": "1830000",
    "name": "Foot Soldier Cap",
    "category": "Head",
    "image": "/equipment_images/armours/Foot_Soldier_Cap.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3.6,
      "slash": 3.4,
      "pierce": 3.4,
      "magic": 3.8,
      "fire": 4,
      "lightning": 4.2,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 27,
      "robustness": 18,
      "focus": 23,
      "vitality": 23
    },
    "poise": 6,
    "weight": 3.6
  },
  {
    "id": "1830100",
    "name": "Chain-Draped Tabard",
    "category": "Chest",
    "image": "/equipment_images/armours/Chain-Draped_Tabard.webp",
    "dmgNegation": {
      "physical": 9.5,
      "strike": 10.2,
      "slash": 9.5,
      "pierce": 9.5,
      "magic": 10.9,
      "fire": 11.4,
      "lightning": 11.9,
      "holy": 10.9
    },
    "resistances": {
      "immunity": 63,
      "robustness": 42,
      "focus": 55,
      "vitality": 55
    },
    "poise": 17,
    "weight": 8.3
  },
  {
    "id": "1830200",
    "name": "Foot Soldier Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Foot_Soldier_Gauntlets.webp",
    "dmgNegation": {
      "physical": 2.1,
      "strike": 2.3,
      "slash": 2.1,
      "pierce": 2.1,
      "magic": 2.5,
      "fire": 2.7,
      "lightning": 2.8,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 20,
      "robustness": 13,
      "focus": 17,
      "vitality": 17
    },
    "poise": 3,
    "weight": 2.6
  },
  {
    "id": "1830300",
    "name": "Foot Soldier Greaves",
    "category": "Legs",
    "image": "/equipment_images/armours/Foot_Soldier_Greaves.webp",
    "dmgNegation": {
      "physical": 5.4,
      "strike": 5.8,
      "slash": 5.4,
      "pierce": 5.4,
      "magic": 6.2,
      "fire": 6.5,
      "lightning": 6.8,
      "holy": 6.2
    },
    "resistances": {
      "immunity": 39,
      "robustness": 26,
      "focus": 34,
      "vitality": 34
    },
    "poise": 10,
    "weight": 5.1
  },
  {
    "id": "1840000",
    "name": "Foot Soldier Helmet",
    "category": "Head",
    "image": "/equipment_images/armours/Foot_Soldier_Helmet.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3.4,
      "slash": 3.6,
      "pierce": 3.6,
      "magic": 4,
      "fire": 4,
      "lightning": 4,
      "holy": 3.6
    },
    "resistances": {
      "immunity": 27,
      "robustness": 18,
      "focus": 23,
      "vitality": 23
    },
    "poise": 6,
    "weight": 3.6
  },
  {
    "id": "1840100",
    "name": "Foot Soldier Tabard",
    "category": "Chest",
    "image": "/equipment_images/armours/Foot_Soldier_Tabard.webp",
    "dmgNegation": {
      "physical": 9.5,
      "strike": 9.5,
      "slash": 10.2,
      "pierce": 10.2,
      "magic": 11.4,
      "fire": 11.4,
      "lightning": 11.4,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 63,
      "robustness": 42,
      "focus": 55,
      "vitality": 55
    },
    "poise": 17,
    "weight": 8.3
  },
  {
    "id": "1850000",
    "name": "Gilded Foot Soldier Cap",
    "category": "Head",
    "image": "/equipment_images/armours/Gilded_Foot_Soldier_Cap.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3.8,
      "slash": 3.1,
      "pierce": 3.6,
      "magic": 3.6,
      "fire": 3.8,
      "lightning": 4.4,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 27,
      "robustness": 18,
      "focus": 23,
      "vitality": 23
    },
    "poise": 6,
    "weight": 3.6
  },
  {
    "id": "1850100",
    "name": "Leather-Draped Tabard",
    "category": "Chest",
    "image": "/equipment_images/armours/Leather-Draped_Tabard.webp",
    "dmgNegation": {
      "physical": 9.5,
      "strike": 10.9,
      "slash": 8.8,
      "pierce": 10.2,
      "magic": 10.2,
      "fire": 10.9,
      "lightning": 12.4,
      "holy": 10.9
    },
    "resistances": {
      "immunity": 63,
      "robustness": 42,
      "focus": 55,
      "vitality": 55
    },
    "poise": 17,
    "weight": 8.3
  },
  {
    "id": "1860000",
    "name": "Foot Soldier Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Foot_Soldier_Helm.webp",
    "dmgNegation": {
      "physical": 3.6,
      "strike": 3.4,
      "slash": 3.1,
      "pierce": 3.1,
      "magic": 3.8,
      "fire": 4.2,
      "lightning": 4.2,
      "holy": 3.8
    },
    "resistances": {
      "immunity": 27,
      "robustness": 18,
      "focus": 23,
      "vitality": 23
    },
    "poise": 6,
    "weight": 3.6
  },
  {
    "id": "1860100",
    "name": "Scarlet Tabard",
    "category": "Chest",
    "image": "/equipment_images/armours/Scarlet_Tabard.webp",
    "dmgNegation": {
      "physical": 10.2,
      "strike": 9.5,
      "slash": 8.8,
      "pierce": 8.8,
      "magic": 10.9,
      "fire": 11.9,
      "lightning": 11.9,
      "holy": 10.9
    },
    "resistances": {
      "immunity": 63,
      "robustness": 42,
      "focus": 55,
      "vitality": 55
    },
    "poise": 17,
    "weight": 8.3
  },
  {
    "id": "1870100",
    "name": "Bloodsoaked Tabard",
    "category": "Chest",
    "image": "/equipment_images/armours/Bloodsoaked_Tabard.webp",
    "dmgNegation": {
      "physical": 9.5,
      "strike": 9.5,
      "slash": 10.2,
      "pierce": 9.5,
      "magic": 10.9,
      "fire": 10.9,
      "lightning": 12.4,
      "holy": 11.4
    },
    "resistances": {
      "immunity": 63,
      "robustness": 38,
      "focus": 55,
      "vitality": 50
    },
    "poise": 18,
    "weight": 8.3
  },
  {
    "id": "1880000",
    "name": "Sacred Crown Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Sacred_Crown_Helm.webp",
    "dmgNegation": {
      "physical": 3.4,
      "strike": 3.8,
      "slash": 3.1,
      "pierce": 3.6,
      "magic": 3.6,
      "fire": 3.8,
      "lightning": 4.2,
      "holy": 4
    },
    "resistances": {
      "immunity": 27,
      "robustness": 18,
      "focus": 23,
      "vitality": 24
    },
    "poise": 5,
    "effect": "Increases faith",
    "statChanges": {
      "faith": 1
    },
    "weight": 3.6
  },
  {
    "id": "1880100",
    "name": "Ivory-Draped Tabard",
    "category": "Chest",
    "image": "/equipment_images/armours/Ivory-Draped_Tabard.webp",
    "dmgNegation": {
      "physical": 9.5,
      "strike": 10.9,
      "slash": 8.8,
      "pierce": 10.2,
      "magic": 10.2,
      "fire": 10.9,
      "lightning": 11.9,
      "holy": 11.4
    },
    "resistances": {
      "immunity": 63,
      "robustness": 42,
      "focus": 55,
      "vitality": 57
    },
    "poise": 16,
    "weight": 8.3
  },
  {
    "id": "1890000",
    "name": "Omensmirk Mask",
    "category": "Head",
    "image": "/equipment_images/armours/Omensmirk_Mask.webp",
    "dmgNegation": {
      "physical": 3.1,
      "strike": 2.8,
      "slash": 2.5,
      "pierce": 2.5,
      "magic": 3.1,
      "fire": 3.4,
      "lightning": 4,
      "holy": 3.6
    },
    "resistances": {
      "immunity": 29,
      "robustness": 12,
      "focus": 20,
      "vitality": 20
    },
    "poise": 6,
    "effect": "Increases strength",
    "statChanges": {
      "strength": 2
    },
    "weight": 3
  },
  {
    "id": "1890100",
    "name": "Omenkiller Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Omenkiller_Robe.webp",
    "dmgNegation": {
      "physical": 8.8,
      "strike": 8,
      "slash": 7.1,
      "pierce": 7.1,
      "magic": 8.8,
      "fire": 9.5,
      "lightning": 11.4,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 67,
      "robustness": 28,
      "focus": 46,
      "vitality": 46
    },
    "poise": 16,
    "weight": 7.1
  },
  {
    "id": "1890200",
    "name": "Omenkiller Long Gloves",
    "category": "Arms",
    "image": "/equipment_images/armours/Omenkiller_Long_Gloves.webp",
    "dmgNegation": {
      "physical": 2.1,
      "strike": 1.9,
      "slash": 1.7,
      "pierce": 1.7,
      "magic": 2.1,
      "fire": 2.3,
      "lightning": 2.8,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 22,
      "robustness": 9,
      "focus": 15,
      "vitality": 15
    },
    "poise": 3,
    "weight": 2.4
  },
  {
    "id": "1890300",
    "name": "Omenkiller Boots",
    "category": "Legs",
    "image": "/equipment_images/armours/Omenkiller_Boots.webp",
    "dmgNegation": {
      "physical": 5,
      "strike": 4.5,
      "slash": 4,
      "pierce": 4,
      "magic": 5,
      "fire": 5.4,
      "lightning": 6.5,
      "holy": 5.8
    },
    "resistances": {
      "immunity": 41,
      "robustness": 17,
      "focus": 29,
      "vitality": 29
    },
    "poise": 9,
    "weight": 4.4
  },
  {
    "id": "1900000",
    "name": "Ash-of-War Scarab",
    "category": "Head",
    "image": "/equipment_images/armours/Ash-of-War_Scarab.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 4,
      "slash": 3.8,
      "pierce": 3.8,
      "magic": 4.6,
      "fire": 4.6,
      "lightning": 4.6,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 42,
      "robustness": 22,
      "focus": 27,
      "vitality": 26
    },
    "poise": 6,
    "effect": "Slightly reduces the FP cost of skills, but increases damage taken",
    "statChanges": {
      "physicalNegation": -10,
      "slashNegation": -10,
      "strikeNegation": -10,
      "pierceNegation": -10,
      "magicNegation": -10,
      "fireNegation": -10,
      "lightningNegation": -10,
      "holyNegation": -10
    },
    "weight": 5.1
  },
  {
    "id": "1901000",
    "name": "Incantation Scarab",
    "category": "Head",
    "image": "/equipment_images/armours/Incantation_Scarab.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 4,
      "slash": 3.8,
      "pierce": 3.8,
      "magic": 4.6,
      "fire": 4.6,
      "lightning": 4.6,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 42,
      "robustness": 22,
      "focus": 27,
      "vitality": 26
    },
    "poise": 6,
    "effect": "Slightly reduces the FP costs of incantations, but increases damage taken",
    "statChanges": {
      "physicalNegation": -10,
      "slashNegation": -10,
      "strikeNegation": -10,
      "pierceNegation": -10,
      "magicNegation": -10,
      "fireNegation": -10,
      "lightningNegation": -10,
      "holyNegation": -10
    },
    "weight": 5.1
  },
  {
    "id": "1902000",
    "name": "Glintstone Scarab",
    "category": "Head",
    "image": "/equipment_images/armours/Glintstone_Scarab.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 4,
      "slash": 3.8,
      "pierce": 3.8,
      "magic": 4.6,
      "fire": 4.6,
      "lightning": 4.6,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 42,
      "robustness": 22,
      "focus": 27,
      "vitality": 26
    },
    "poise": 6,
    "effect": "Slightly reduces the FP costs of sorceries, but increases damage taken",
    "statChanges": {
      "physicalNegation": -10,
      "slashNegation": -10,
      "strikeNegation": -10,
      "pierceNegation": -10,
      "magicNegation": -10,
      "fireNegation": -10,
      "lightningNegation": -10,
      "holyNegation": -10,
      "fpCost": 0.85
    },
    "weight": 5.1
  },
  {
    "id": "1910000",
    "name": "Crimson Tear Scarab",
    "category": "Head",
    "image": "/equipment_images/armours/Crimson_Tear_Scarab.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 4,
      "slash": 3.8,
      "pierce": 3.8,
      "magic": 4.6,
      "fire": 4.6,
      "lightning": 4.6,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 42,
      "robustness": 22,
      "focus": 27,
      "vitality": 26
    },
    "poise": 6,
    "effect": "Slightly increases the recovery effects of the Flask of Crimson Tears, but increases damage taken",
    "statChanges": {
      "physicalNegation": -10,
      "slashNegation": -10,
      "strikeNegation": -10,
      "pierceNegation": -10,
      "magicNegation": -10,
      "fireNegation": -10,
      "lightningNegation": -10,
      "holyNegation": -10
    },
    "weight": 5.1
  },
  {
    "id": "1920000",
    "name": "Cerulean Tear Scarab",
    "category": "Head",
    "image": "/equipment_images/armours/Cerulean_Tear_Scarab.webp",
    "dmgNegation": {
      "physical": 3.8,
      "strike": 4,
      "slash": 3.8,
      "pierce": 3.8,
      "magic": 4.6,
      "fire": 4.6,
      "lightning": 4.6,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 42,
      "robustness": 22,
      "focus": 27,
      "vitality": 26
    },
    "poise": 6,
    "effect": "Slightly increases the recovery effects of the Flask of Cerulean Tears, but increases damage taken",
    "statChanges": {
      "physicalNegation": -10,
      "slashNegation": -10,
      "strikeNegation": -10,
      "pierceNegation": -10,
      "magicNegation": -10,
      "fireNegation": -10,
      "lightningNegation": -10,
      "holyNegation": -10
    },
    "weight": 5.1
  },
  {
    "id": "1930100",
    "name": "Deathbed Dress",
    "category": "Chest",
    "image": "/equipment_images/armours/Deathbed_Dress.webp",
    "dmgNegation": {
      "physical": 0.6,
      "strike": 2.7,
      "slash": 0.6,
      "pierce": 0.6,
      "magic": 11.9,
      "fire": 11.4,
      "lightning": 11.9,
      "holy": 12.4
    },
    "resistances": {
      "immunity": 38,
      "robustness": 11,
      "focus": 63,
      "vitality": 107
    },
    "poise": 5,
    "effect": "Slowly replenishes the HP of nearby allies, but not that of the wearer",
    "weight": 3.2
  },
  {
    "id": "1940000",
    "name": "Fia's Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Fia's_Hood.webp",
    "dmgNegation": {
      "physical": 1.4,
      "strike": 1.8,
      "slash": 1.4,
      "pierce": 1.4,
      "magic": 4.4,
      "fire": 4.2,
      "lightning": 4.4,
      "holy": 4.6
    },
    "resistances": {
      "immunity": 18,
      "robustness": 8,
      "focus": 29,
      "vitality": 45
    },
    "poise": 2,
    "weight": 1.7
  },
  {
    "id": "1940100",
    "name": "Fia's Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Fia's_Robe.webp",
    "dmgNegation": {
      "physical": 5.3,
      "strike": 6.1,
      "slash": 5.3,
      "pierce": 5.3,
      "magic": 12.6,
      "fire": 12.4,
      "lightning": 12.6,
      "holy": 13
    },
    "resistances": {
      "immunity": 46,
      "robustness": 21,
      "focus": 76,
      "vitality": 108
    },
    "poise": 8,
    "weight": 5.1
  },
  {
    "id": "1941100",
    "name": "Fia's Robe (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Fia's_Robe_(Altered).webp",
    "dmgNegation": {
      "physical": 2.7,
      "strike": 4.2,
      "slash": 2.7,
      "pierce": 2.7,
      "magic": 11.9,
      "fire": 11.4,
      "lightning": 11.9,
      "holy": 12.6
    },
    "resistances": {
      "immunity": 34,
      "robustness": 10,
      "focus": 57,
      "vitality": 93
    },
    "poise": 5,
    "weight": 3.2
  },
  {
    "id": "1980000",
    "name": "Highwayman Hood",
    "category": "Head",
    "image": "/equipment_images/armours/Highwayman_Hood.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 3.6,
      "slash": 2.8,
      "pierce": 3.1,
      "magic": 3.8,
      "fire": 3.8,
      "lightning": 4,
      "holy": 3.6
    },
    "resistances": {
      "immunity": 24,
      "robustness": 15,
      "focus": 22,
      "vitality": 22
    },
    "poise": 4,
    "weight": 3.3
  },
  {
    "id": "1980100",
    "name": "Highwayman Cloth Armor",
    "category": "Chest",
    "image": "/equipment_images/armours/Highwayman_Cloth_Armor.webp",
    "dmgNegation": {
      "physical": 8,
      "strike": 10.2,
      "slash": 8,
      "pierce": 8.8,
      "magic": 10.9,
      "fire": 10.9,
      "lightning": 11.4,
      "holy": 10.2
    },
    "resistances": {
      "immunity": 57,
      "robustness": 35,
      "focus": 50,
      "vitality": 50
    },
    "poise": 16,
    "weight": 7.7
  },
  {
    "id": "1980200",
    "name": "Highwayman Gauntlets",
    "category": "Arms",
    "image": "/equipment_images/armours/Highwayman_Gauntlets.webp",
    "dmgNegation": {
      "physical": 1.9,
      "strike": 2.5,
      "slash": 1.9,
      "pierce": 2.1,
      "magic": 2.7,
      "fire": 2.7,
      "lightning": 2.8,
      "holy": 2.5
    },
    "resistances": {
      "immunity": 19,
      "robustness": 12,
      "focus": 17,
      "vitality": 17
    },
    "poise": 3,
    "weight": 2.6
  },
  {
    "id": "1990000",
    "name": "High Page Hood",
    "category": "Head",
    "image": "/equipment_images/armours/High_Page_Hood.webp",
    "dmgNegation": {
      "physical": 0.9,
      "strike": 1.8,
      "slash": 0.9,
      "pierce": 0.9,
      "magic": 4.6,
      "fire": 4.2,
      "lightning": 4.4,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 15,
      "robustness": 8,
      "focus": 27,
      "vitality": 27
    },
    "poise": 2,
    "weight": 1.4
  },
  {
    "id": "1990100",
    "name": "High Page Clothes",
    "category": "Chest",
    "image": "/equipment_images/armours/High_Page_Clothes.webp",
    "dmgNegation": {
      "physical": 5.5,
      "strike": 6.9,
      "slash": 5.5,
      "pierce": 5.5,
      "magic": 13.5,
      "fire": 12.8,
      "lightning": 13,
      "holy": 13.2
    },
    "resistances": {
      "immunity": 42,
      "robustness": 23,
      "focus": 76,
      "vitality": 76
    },
    "poise": 10,
    "weight": 5.3
  },
  {
    "id": "1991100",
    "name": "High Page Clothes (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/High_Page_Clothes_(Altered).webp",
    "dmgNegation": {
      "physical": 4.4,
      "strike": 6.3,
      "slash": 4.4,
      "pierce": 4.4,
      "magic": 13.2,
      "fire": 12.6,
      "lightning": 12.8,
      "holy": 13
    },
    "resistances": {
      "immunity": 34,
      "robustness": 19,
      "focus": 61,
      "vitality": 61
    },
    "poise": 8,
    "weight": 4.3
  },
  {
    "id": "2000000",
    "name": "Rotten Duelist Helm",
    "category": "Head",
    "image": "/equipment_images/armours/Rotten_Duelist_Helm.webp",
    "dmgNegation": {
      "physical": 5.5,
      "strike": 4.6,
      "slash": 5.8,
      "pierce": 5.5,
      "magic": 4.5,
      "fire": 4.6,
      "lightning": 4.4,
      "holy": 4.5
    },
    "resistances": {
      "immunity": 31,
      "robustness": 31,
      "focus": 14,
      "vitality": 14
    },
    "poise": 9,
    "effect": "The wearer becomes a slightly easier target for foes",
    "weight": 6.4
  },
  {
    "id": "2000100",
    "name": "Rotten Gravekeeper Cloak",
    "category": "Chest",
    "image": "/equipment_images/armours/Rotten_Gravekeeper_Cloak.webp",
    "dmgNegation": {
      "physical": 6.7,
      "strike": 6.7,
      "slash": 6.7,
      "pierce": 6.7,
      "magic": 8.8,
      "fire": 8.8,
      "lightning": 10.9,
      "holy": 8.8
    },
    "resistances": {
      "immunity": 76,
      "robustness": 32,
      "focus": 42,
      "vitality": 42
    },
    "poise": 12,
    "weight": 6.3
  },
  {
    "id": "2000300",
    "name": "Rotten Duelist Greaves",
    "image": "/equipment_images/armours/Rotten_Duelist_Greaves.webp",
    "dmgNegation": {
      "physical": 7.4,
      "strike": 6.2,
      "slash": 7.7,
      "pierce": 7.1,
      "magic": 6.2,
      "fire": 6.5,
      "lightning": 5.8,
      "holy": 6.2
    },
    "resistances": {
      "immunity": 35,
      "robustness": 35,
      "focus": 15,
      "vitality": 15
    },
    "poise": 13,
    "effect": "The wearer becomes a slightly easier target for foes",
    "weight": 7.3,
    "category": "Legs"
  },
  {
    "id": "2001100",
    "name": "Rotten Gravekeeper Cloak (Altered)",
    "category": "Chest",
    "image": "/equipment_images/armours/Rotten_Gravekeeper_Cloak_(Altered).webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 6.1,
      "slash": 6.1,
      "pierce": 6.1,
      "magic": 8,
      "fire": 8,
      "lightning": 10.2,
      "holy": 8
    },
    "resistances": {
      "immunity": 64,
      "robustness": 25,
      "focus": 34,
      "vitality": 34
    },
    "poise": 8,
    "effect": "The wearer becomes a slightly easier target for foes",
    "weight": 5.1
  },
  {
    "id": "2010000",
    "name": "Mushroom Crown",
    "category": "Head",
    "image": "/equipment_images/armours/Mushroom_Crown.webp",
    "dmgNegation": {
      "physical": 5.8,
      "strike": 5.9,
      "slash": 6.8,
      "pierce": 7,
      "magic": 4.8,
      "fire": 3.1,
      "lightning": 4.6,
      "holy": 4.8
    },
    "resistances": {
      "immunity": 46,
      "robustness": 45,
      "focus": 18,
      "vitality": 22
    },
    "poise": 10,
    "effect": "Raises attack power when something nearby suffers from poison or rot",
    "weight": 9.1
  },
  {
    "id": "2020000",
    "name": "Black Dumpling",
    "category": "Head",
    "image": "/equipment_images/armours/Black_Dumpling.webp",
    "dmgNegation": {
      "physical": 2.8,
      "strike": 3.1,
      "slash": 2.8,
      "pierce": 2.8,
      "magic": 3.1,
      "fire": 3.4,
      "lightning": 3.6,
      "holy": 3.1
    },
    "resistances": {
      "immunity": 24,
      "robustness": 15,
      "focus": 0,
      "vitality": 20
    },
    "poise": 4,
    "effect": "Raises attack power when the wearer suffers from madness",
    "weight": 2.7
  },
  {
    "id": "2030000",
    "name": "Lazuli Robe",
    "category": "Chest",
    "image": "/equipment_images/armours/Lazuli_Robe.webp",
    "dmgNegation": {
      "physical": 6.1,
      "strike": 5.3,
      "slash": 4.2,
      "pierce": 2.7,
      "magic": 13.8,
      "fire": 11.9,
      "lightning": 12.4,
      "holy": 12.8
    },
    "resistances": {
      "immunity": 42,
      "robustness": 21,
      "focus": 67,
      "vitality": 67
    },
    "poise": 8,
    "weight": 4.1
  }
]