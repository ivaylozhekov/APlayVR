import { ADD_ENTITY, CHANGE_DEFAULT_VIDEO, RECEIVED_PRODUCTS } from './actions';

const initialState = {
  sceneEntities: [],
  videoName: 'video1.mp4',
  products: [
    {
      id: 1,
      title: 'X 17.1 FIRM GROUND CLEATS',
      price: 170,
      description:
        'EXPLOSIVE QUICKNESS FOR THE SPEED DEMON. Ignite the game. Burn past defenders. Push the pace beyond belief. Fast as fire, gone like smoke, X explodes down the line and goalwards. Lace up and light up the field. These featherweight soccer cleats have a one-piece Techfit compression upper for quick moves into and out of the box. The Non Stop Grip texture keeps the ball where you need it, while the Sprintframe outsole delivers high-speed traction on firm ground.',
      url: 'https://www.adidas.com/us/x-17.1-firm-ground-cleats/CP9161.html',
      images: [
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Grey_CM7712_01_standard',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Grey_CM7712_02_hover_frv',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Grey_CM7712_02_standard',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Grey_CM7712_03_standard',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Grey_CM7712_04_standard',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Grey_CM7712_05_standard',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Grey_CM7712_06_standard',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Grey_CM7712_41_detail',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Grey_CM7712_42_detail',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Grey_CM7712_43_detail'
      ]
    },
    {
      id: 2,
      title: 'X 17.1 FIRM GROUND CLEATS',
      price: 200,
      description:
        'EXPLOSIVE QUICKNESS FOR THE SPEED DEMON. Ignite the game. Burn past defenders. Push the pace beyond belief. Fast as fire, gone like smoke, X explodes down the line and goalwards. Lace up and light up the field. These featherweight soccer cleats have a one-piece Techfit compression upper for quick moves into and out of the box. The Non Stop Grip texture keeps the ball where you need it, while the Sprintframe outsole delivers high-speed traction on firm ground.',
      ult: 'https://www.adidas.com/us/x-17.1-firm-ground-cleats/CP9163.html',
      images: [
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Green_CM7713_01_standard',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Green_CM7713_02_hover_frv',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Green_CM7713_02_standard',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Green_CM7713_03_standard',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Green_CM7713_04_standard',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Green_CM7713_05_standard',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Green_CM7713_06_standard',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Green_CM7713_41_detail',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Green_CM7713_42_detail',
        '/assets/X_17__Purespeed_Firm_Ground_Cleats_Green_CM7713_43_detail'
      ]
    },
    {
      id: 3,
      title: 'PREDATOR 18+ FIRM GROUND CLEATS',
      price: 300,
      description:
        "CLINICAL PRECISION FOR THE MASTER OF CONTROL. Turn your vision into control and prove your dominance with every precise pass, every minute of the game. With Predator, you leave nothing to chance, you're the master of control. Keep the ball glued to your feet in these soccer cleats, featuring a flexible adidas Primeknit upper and ultra-responsive Boost. Made to dominate on firm ground.",
      url:
        'https://www.adidas.com/us/predator-18_-firm-ground-cleats/CM7394.html?pr=product_rr&slot=6',
      images: [
        '/assets/Predator_18__Firm_Ground_Cleats_Blue_CM7394_01_standard-2',
        '/assets/Predator_18__Firm_Ground_Cleats_Blue_CM7394_01_standard',
        '/assets/Predator_18__Firm_Ground_Cleats_Blue_CM7394_02_hover_frv',
        '/assets/Predator_18__Firm_Ground_Cleats_Blue_CM7394_03_standard',
        '/assets/Predator_18__Firm_Ground_Cleats_Blue_CM7394_03_standard',
        '/assets/Predator_18__Firm_Ground_Cleats_Blue_CM7394_04_standard',
        '/assets/Predator_18__Firm_Ground_Cleats_Blue_CM7394_05_standard',
        '/assets/Predator_18__Firm_Ground_Cleats_Blue_CM7394_06_standard',
        '/assets/Predator_18__Firm_Ground_Cleats_Blue_CM7394_41_detail',
        '/assets/Predator_18__Firm_Ground_Cleats_Blue_CM7394_42_detail',
        '/assets/Predator_18__Firm_Ground_Cleats_Blue_CM7394_43_detail'
      ]
    },
    {
      id: 4,
      title: 'NEMEZIZ 17+ 360 AGILITY FIRM GROUND CLEATS',
      price: 174,
      description:
        "UNREAL AGILITY FOR THE GAMECHANGER. Weave through defenders. Morph into space. Slither when they think you'll streak. Create when they think you'll crash. Turn instinct into action and doubters into witnesses. Unlock agility in Nemeziz. These soccer cleats are built with an innovative tape-inspired upper that offers high mobility without sacrificing support. They have a Torsionframe outsole geared for explosive acceleration on firm ground.",
      url:
        'https://www.adidas.com/us/nemeziz-17-plus-360-agility-firm-ground-cleats/BB6317.html',
        images: [
          '/assets/Nemeziz_17__360_Agility_Firm_Ground_Cleats_Black_BB6317_01_standard',
          '/assets/Nemeziz_17__360_Agility_Firm_Ground_Cleats_Black_BB6317_02_hover_frv',
          '/assets/Nemeziz_17__360_Agility_Firm_Ground_Cleats_Black_BB6317_02_standard',
          '/assets/Nemeziz_17__360_Agility_Firm_Ground_Cleats_Black_BB6317_03_standard',
          '/assets/Nemeziz_17__360_Agility_Firm_Ground_Cleats_Black_BB6317_04_standard',
          '/assets/Nemeziz_17__360_Agility_Firm_Ground_Cleats_Black_BB6317_05_standard',
          '/assets/Nemeziz_17__360_Agility_Firm_Ground_Cleats_Black_BB6317_06_standard',
          '/assets/Nemeziz_17__360_Agility_Firm_Ground_Cleats_Black_BB6317_41_detail',
          '/assets/Nemeziz_17__360_Agility_Firm_Ground_Cleats_Black_BB6317_42_detail',
          '/assets/Nemeziz_17__360_Agility_Firm_Ground_Cleats_Black_BB6317_43_detail'
        ]
    },
    {
      id: 5,
      title: 'ADIZERO 5-STAR 7.0 SNOOP MONEY BAG GLOVES',
      price: 55,
      description:
        "BREATHABLE FOOTBALL GLOVES INSPIRED BY SNOOP DOGG. Make big plays and flash your love for Snoop Dogg in these football gloves. They offer extra grip to provide secure ball control during summer two-a-days and wet-weather playoff games. They're breathable and lightweight to keep you cool and dry under pressure. Compression fabric and a hook-and-loop strap offer a custom fit that lasts for all four quarters.   Consistent grip Seamless GripTack palm for consistent grip and control in all weather conditions  Flexible comfort Breathable, flexible adidas Primeknit for seamless comfort and fit  Lightweight ventilation Climacool keeps you cool and dry in warm weather.",
      url:
        'https://www.adidas.com/us/adizero-5-star-7.0-snoop-money-bag-gloves/CJ9100.html',
        images: [
          '/assets/Adizero_5-Star_7_0_Gloves_Gold_CJ7119_01_standard',
          '/assets/Adizero_5-Star_7_0_Gloves_Gold_CJ7119_41_detail',
          '/assets/Adizero_5-Star_7_0_Gloves_Gold_CJ7119_42_detail',
          '/assets/Adizero_5-Star_7_0_Gloves_Gold_CJ7119_43_detail'
        ]
    },
    {
      id: 6,
      title:
        'https://www.adidas.com/us/adizero-5-star-7.0-emoji-fire-gloves/CJ9098.html?pr=product_rr&slot=4',
      price: 50,
      description:
        'LIGHTWEIGHT GLOVES FEATURING A GRAPHIC DESIGN. Break off big plays in style. Flashing graphic details, these football gloves are built with extra grip that provides secure ball control for summer two-a-days and wet-weather playoff games. Breathable and lightweight, these gloves keeps you cool and dry under pressure. Compression fabric and a hook-and-loop strap offer a custom fit that lasts for all four quarters.   Consistent grip Seamless GripTack palm for consistent grip and control in all weather conditions  Flexible comfort Breathable, flexible adidas Primeknit for seamless comfort and fit  Lightweight ventilation Climacool keeps you cool and dry in warm weather.',
      url:
        'https://www.adidas.com/us/adizero-5-star-7.0-emoji-fire-gloves/CJ9098.html?pr=product_rr&slot=4',
        images: [
          '/assets/Adizero_5-Star_7_0_Emoji_Fire_Gloves_Black_CJ9098_01_standard',
          '/assets/Adizero_5-Star_7_0_Emoji_Fire_Gloves_Black_CJ9098_41_detail',
          '/assets/Adizero_5-Star_7_0_Emoji_Fire_Gloves_Black_CJ9098_42_detail',
          '/assets/Adizero_5-Star_7_0_Emoji_Fire_Gloves_Black_CJ9098_43_detail'
        ]
    }
  ],
};

export default function ASceneReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTITY:
      return {
        sceneEntities: action.entity,
        ...state,
      };
    case CHANGE_DEFAULT_VIDEO:
        return {
          videoName: action.payload,
          ...state,
        }
    case RECEIVED_PRODUCTS:
        return {
          products: action.payload,
          ...state,
        }
    default:
      return state;
  }
}
