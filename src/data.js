import GYM from '../src/assets/icons/gym.png'
import Buddha from '../src/assets/icons/buddha.png'
import Kids from '../src/assets/icons/kids.png'
import Security from '../src/assets/icons/security.png'
import Solor from '../src/assets/icons/solor.png'
import Nature from '../src/assets/icons/nature.png'

import GroundFloorImage from './assets/ground floor.png';
import FirstFloorImage from '/src/assets/first floor.png';
import SecondFloorImage from '/src/assets/second floor.png';

import EastSideStreetView from './assets/001.jpg'
import EastSideFrontView from './assets/002.jpg'
import WestSideStreetView from './assets/003.jpg'
import SymmetrycalView from './assets/004.jpg'
import TopView from './assets/005.jpg'
import AerialView from './assets/006.jpg'

export const faqData = [
    {
        question: "What is Lorem Ipsum?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        question: "Why do we use it?",
        answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
        question: "What is Lorem Ipsum?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        question: "Why do we use it?",
        answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
];



export const partnerData = [
    {
        name: 'Partner 1',
        image: 'partner1',
    },
];


export const streetViewData = [
    {
        id: 0,
        image: EastSideStreetView,
        name: 'East Side View'
    },
    {
        id: 1,
        image: EastSideFrontView,
        name: 'East Side Front View'
    },
    {
        id: 2,
        image: WestSideStreetView,
        name: 'West Side Street View'
    },
    {
        id: 3,
        image: SymmetrycalView,
        name: 'Symmetrycal View'
    },
    {
        id: 4,
        image: TopView,
        name: 'Top View'
    },
    {
        id: 0,
        image: AerialView,
        name: 'Aerial View'
    },
];

export const AMENITIES_ELEMENTS = [
    {
        id: 0,
        image: GYM,
        name: " In-house Gym",
    },
    {
        id: 1,
        image: Buddha,
        name: "Buddha small temple",
    },
    {
        id: 2,
        image: Nature,
        name: "Green Landscape",
    },
    {
        id: 3,
        image: Kids,
        name: "Kids zone & Senior Citizens area",
    },
    {
        id: 4,
        image: Security,
        name: "Advanced Security 24/7",
    },
    {
        id: 5,
        image: Solor,
        name: "Solar Energy for Street Lighting",
    },
];

export const KEY_FEATURES = [
    // {
    //     id: 0,
    //     feature: "A PROPERTY IN TADA LIKE NO OTHER",
    // },
    {
        id: 1,
        feature: "ISRO SPACE STATION LAUNCH PAD VISIBLE FROM OUR SITE.",
    },
    {
        id: 2,
        feature: "18 LUXURY VILLAS",
    },
    {
        id: 3,
        feature: "SPANNING 21 ACRES LARGEST GATED COMMUNITY IN SRICITY TADA",
    },
    {
        id: 4,
        feature: "RENTAL PROPERTY INCOME",
    },
    {
        id: 5,
        feature: "EXCELLENT RETURN ON INVESTMENT",
    },
    {
        id: 6,
        feature: "OPPOSITE SRICITY ENTRANCE",
    },
    {
        id: 7,
        feature: "150+ COMPANIES WITHIN 5 MINS",
    },
    {
        id: 8,
        feature: "ACCESS TO THE BEST SCHOOLS AND INSTITUTIONS",
    },
    {
        id: 9,
        feature: "3 BHK & 4 BHK",
    },
    {
        id: 10,
        feature: "NATURE'S BOUNTY",
    },
    {
        id: 11,
        feature: "EXPERT PROPERTY MANAGEMENT",
    },
    {
        id: 12,
        feature: "ACCESS TO TOURIST ATTRACTIONS",
    },
];


export const FloorImages = [
    {
        id: 0,
        image: GroundFloorImage,
        name: 'Ground Floor'
    },
    {
        id: 1,
        image: FirstFloorImage,
        name: 'First Floor'
    },
    {
        id: 2,
        image: SecondFloorImage,
        name: 'Second Floor'
    }
];

export const LocationData = {
    '0-2KM': {
        'JAPAN INDUSTRIAL CLUSTER': ['Isuzu Motors', 'Kobelco Cranes', 'NHK Springs', 'IMOP', 'Nippon Seiki'],
        'FOOD JOINTS': ['Coffeday', 'The Kitchen Family Restaurant', 'Big Stay Restaurant', 'Swathi Residency', 'Chaitanya Mess'],
        'HOTEL/SERVICE APARTMENTS': ['HavinHomes - Stay', 'Big Stay Restaurant', 'Comfort Stay', 'HavinHomes - Elite Villas', 'Mangi Garden Hotel']
    },
    '2-4KM': {
        'INDUSTRIAL CLUSTER': ['Cadbury-Mondelez', 'Colgate Palmolive', 'Foxconn Mobiles', 'Unicharm - Mamy Poko', 'Lavazza India Pvt Ltd', 'VRV Italy', 'Hunter Douglas', 'TATA Trao', 'Nittan India Tech', 'Bergin Pipes India'],
        'MEDICAL FACILITIES': ['Kanchi Kamakoti Child trust Hospital', 'Shankara Nethralaya', 'Kaveri Hospital'],
        'EDUCATIONAL INSTITUTIONS': ['IIIT - Indian Institute of Information and Technology', 'Kreya International University', 'Accord International School', 'Chinnmaya Vidya Mandir - CBSE', 'Padmavathi CBSE School']
    },
    '4-6KM': {
        'INDUSTRIAL CLUSTER': ['Kellogg’s', 'Alstom Metro Rail Pvt Ltd', 'Bluestar Air Conditioning', 'Amber Enterprises', 'Kikuwa', 'KCL', 'Paques Swiz Cleaning', 'Be Rollex', 'Indo Space', 'NGC Transmission'],
        'CONNECTIVITY': ['Tada Railway Station', 'Tada Bus Stand', 'Sullurpeta Railway Station'],
        'ENTERTAINMENT': ['V Epiq Multiplex - 3D Multiplex', 'N.V.R Movie Theatre']
    },
    '7 KM+': {
        'INDUSTRIAL CLUSTER & FTWZ': ['Daikin Air condition', 'Hero Motocorp', 'Apollo Tyres', 'Linde / Praxair', 'PepsiCo India', 'West Pharma', 'Rockworth Furniture', 'Siddhartha FTWZ', 'TVS Brakes India', 'Sricity Business Center'],
        'TEMPLES': ['Chengalamma Parameswari temple', 'Oneness Temple', 'Sri Kasi Visveshwara Temple - Mambattu'],
        'ICONIC & TOURIST PLACES TO VISIT': ['ISRO Rocket Launch center', 'Pullicat Lake - Fishing & Boating', 'Tada Waterfalls - for trekking', 'Nelapattu Bird Sanctuary', 'One Ness - Kalki Golden Temple', 'Sri Kalahasthi Temple']
    }
};

;


