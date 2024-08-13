import CD from './assets/icons/diag.png';
import RM from './assets/icons/maintenance.png';
import ER from './assets/icons/repair.png';
import AC from './assets/icons/others.png';

const services = [
  {
    id: 1,
    name: 'Computer Diagnosis',
    icon: CD,
    desc: "Mobile Mechanix offers top-notch automobile computer diagnostics, a crucial service for modern vehicles. Using advanced diagnostic tools and software, our skilled technicians connect to your car's onboard computer system to retrieve error codes, monitor sensor readings, and conduct comprehensive system evaluations.",
    cost: 100,
    images: [
      {
        url: 'https://images.pexels.com/photos/5540074/pexels-photo-5540074.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Ferrari Brakes',
      },
      {
        url: 'https://images.pexels.com/photos/4243617/pexels-photo-4243617.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Opened Engine Bay',
      },
      {
        url: 'https://images.pexels.com/photos/5303537/pexels-photo-5303537.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Displayed Engine',
      },
      {
        url: 'https://images.pexels.com/photos/1125475/pexels-photo-1125475.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'A Park of Mercedes Benz',
      },
    ],
  },
  {
    id: 2,
    name: 'Routine Maintenance',
    icon: RM,
    desc: 'Routine maintenance is essential to keep your vehicle running smoothly and to prevent major repairs. Our service includes oil changes, tire rotations, brake inspections, and fluid checks to ensure your car is in top condition.',
    cost: 75,
    images: [
      {
        url: 'https://images.pexels.com/photos/6025084/pexels-photo-6025084.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Oil Change',
      },
      {
        url: 'https://images.pexels.com/photos/3806248/pexels-photo-3806248.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Tire Rotation',
      },
      {
        url: 'https://images.pexels.com/photos/4489740/pexels-photo-4489740.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Brake Inspection',
      },
      {
        url: 'https://images.pexels.com/photos/4489740/pexels-photo-4489740.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Fluid Check',
      },
    ],
  },
  {
    id: 3,
    name: 'Electrical Repairs',
    icon: ER,
    desc: 'Our skilled technicians are equipped to handle all types of electrical repairs, from fixing faulty wiring to replacing batteries and alternators. We use advanced diagnostic tools to identify and resolve electrical issues efficiently.',
    cost: 120,
    images: [
      {
        url: 'https://images.pexels.com/photos/3836256/pexels-photo-3836256.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Battery Replacement',
      },
      {
        url: 'https://images.pexels.com/photos/4489760/pexels-photo-4489760.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Electrical Wiring',
      },
      {
        url: 'https://images.pexels.com/photos/4489759/pexels-photo-4489759.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Alternator Replacement',
      },
      {
        url: 'https://images.pexels.com/photos/3807369/pexels-photo-3807369.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Fuse Box Inspection',
      },
    ],
  },
  {
    id: 4,
    name: 'Air Conditioning Maintenance',
    icon: AC,
    desc: 'Ensure your vehicle’s air conditioning system is working efficiently with our comprehensive maintenance services. We check for refrigerant leaks, inspect the compressor, and clean the AC system to keep you cool on the road.',
    cost: 90,
    images: [
      {
        url: 'https://images.pexels.com/photos/6006357/pexels-photo-6006357.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'AC System Check',
      },
      {
        url: 'https://images.pexels.com/photos/6006365/pexels-photo-6006365.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Refrigerant Check',
      },
      {
        url: 'https://images.pexels.com/photos/6006370/pexels-photo-6006370.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'Compressor Inspection',
      },
      {
        url: 'https://images.pexels.com/photos/6006375/pexels-photo-6006375.jpeg?auto=compress&cs=tinysrgb&w=600',
        caption: 'AC System Cleaning',
      },
    ],
  },
];

export {services};
