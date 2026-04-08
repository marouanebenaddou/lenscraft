import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');

const assets = [
  // Hero
  { url: 'https://digicodestv.com/lovable-uploads/09590c1e-ad60-4c24-b4c8-905f4005dcee.png', dest: 'images/logo.png' },
  { url: 'https://digicodestv.com/assets/hero-family-watching-tv.jpg', dest: 'images/hero-family-watching-tv.jpg' },

  // WhatsApp proofs (testimonials)
  { url: 'https://digicodestv.com/assets/whatsapp-proof-1-c7w-XbcN.jpeg', dest: 'images/whatsapp-proof-1.jpeg' },
  { url: 'https://digicodestv.com/assets/whatsapp-proof-2-BGYNHw4k.jpeg', dest: 'images/whatsapp-proof-2.jpeg' },
  { url: 'https://digicodestv.com/assets/whatsapp-proof-3-BsErZgbo.jpeg', dest: 'images/whatsapp-proof-3.jpeg' },
  { url: 'https://digicodestv.com/assets/whatsapp-proof-4-D9enIK43.jpeg', dest: 'images/whatsapp-proof-4.jpeg' },
  { url: 'https://digicodestv.com/assets/whatsapp-proof-5-D6plbLoh.jpeg', dest: 'images/whatsapp-proof-5.jpeg' },
  { url: 'https://digicodestv.com/assets/whatsapp-proof-6-Dg-jxF4-.jpeg', dest: 'images/whatsapp-proof-6.jpeg' },
  { url: 'https://digicodestv.com/assets/whatsapp-proof-7-DFnovd9V.jpeg', dest: 'images/whatsapp-proof-7.jpeg' },
  { url: 'https://digicodestv.com/assets/whatsapp-proof-9-Dtn8NHWg.jpeg', dest: 'images/whatsapp-proof-9.jpeg' },
  { url: 'https://digicodestv.com/assets/whatsapp-proof-10-D6gmUSlm.jpeg', dest: 'images/whatsapp-proof-10.jpeg' },

  // Payment methods
  { url: 'https://digicodestv.com/assets/visa-mastercard-7a0aLWVP.png', dest: 'images/payments/visa-mastercard.png' },
  { url: 'https://digicodestv.com/assets/virement-bancaire-DKiGfR4X.png', dest: 'images/payments/virement-bancaire.png' },
  { url: 'https://digicodestv.com/assets/wafacash-DCDiJGic.png', dest: 'images/payments/wafacash.png' },
  { url: 'https://digicodestv.com/assets/cashplus-9P0DtsOu.png', dest: 'images/payments/cashplus.png' },
  { url: 'https://digicodestv.com/assets/banques-DTUW1yW7.png', dest: 'images/payments/banques.png' },
  { url: 'https://digicodestv.com/assets/paypal-RPN4DA3m.png', dest: 'images/payments/paypal.png' },
  { url: 'https://digicodestv.com/assets/remitly-DRdtHywJ.png', dest: 'images/payments/remitly.png' },
  { url: 'https://digicodestv.com/assets/western-union-DbEP3cji.png', dest: 'images/payments/western-union.png' },
  { url: 'https://digicodestv.com/assets/binance-0eNF3tR-.png', dest: 'images/payments/binance.png' },
  { url: 'https://digicodestv.com/assets/compte-europe-B8Igz480.png', dest: 'images/payments/compte-europe.png' },

  // Benefits / Why Choose Us
  { url: 'https://digicodestv.com/assets/benefits-hero-Dr22Nijq.png', dest: 'images/benefits-hero.png' },

  // Support
  { url: 'https://digicodestv.com/assets/iptv-support-D1W-sOPd.jpg', dest: 'images/iptv-support.jpg' },

  // Device compatibility
  { url: 'https://digicodestv.com/assets/smart-tv-CBz9Egjz.png', dest: 'images/devices/smart-tv.png' },
  { url: 'https://digicodestv.com/assets/android-tv-CbPMa0r9.png', dest: 'images/devices/android-tv.png' },
  { url: 'https://digicodestv.com/assets/fire-stick-Z_BMWC7H.png', dest: 'images/devices/fire-stick.png' },
  { url: 'https://digicodestv.com/assets/smartphone-DvtjjDcf.png', dest: 'images/devices/smartphone.png' },
  { url: 'https://digicodestv.com/assets/tablet-B1O-fevH.png', dest: 'images/devices/tablet.png' },
  { url: 'https://digicodestv.com/assets/laptop-D1CsEkq3.png', dest: 'images/devices/laptop.png' },

  // Content catalog (Unsplash)
  { url: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&q=80', dest: 'images/catalog/sports.jpg' },
  { url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80', dest: 'images/catalog/cinema.jpg' },
  { url: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&q=80', dest: 'images/catalog/series.jpg' },
  { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', dest: 'images/catalog/international.jpg' },
  { url: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80', dest: 'images/catalog/kids.jpg' },

  // Channel logos (lovable-uploads)
  { url: 'https://digicodestv.com/lovable-uploads/f72812ec-d994-4896-9b71-b01220fca310.png', dest: 'images/channels/ch-01.png' },
  { url: 'https://digicodestv.com/lovable-uploads/dcb3e6c1-7fd6-431e-a247-a0c93c941a11.png', dest: 'images/channels/ch-02.png' },
  { url: 'https://digicodestv.com/lovable-uploads/32c2869d-06ee-4191-9bf2-752a86b10f0d.png', dest: 'images/channels/ch-03.png' },
  { url: 'https://digicodestv.com/lovable-uploads/0b61a70c-70f1-4889-b1cf-e2e2c67a5338.png', dest: 'images/channels/ch-04.png' },
  { url: 'https://digicodestv.com/lovable-uploads/6ca9e1aa-4589-4c80-8959-be3d35952b04.png', dest: 'images/channels/ch-05.png' },
  { url: 'https://digicodestv.com/lovable-uploads/7abbc02b-e199-46b2-84d9-0a255f539ede.png', dest: 'images/channels/ch-06.png' },
  { url: 'https://digicodestv.com/lovable-uploads/a27c8945-b2ce-4bc2-b3d0-4005a580beb3.png', dest: 'images/channels/ch-07.png' },
  { url: 'https://digicodestv.com/lovable-uploads/b18eec32-a6db-4670-b876-ce0d340d049f.png', dest: 'images/channels/ch-08.png' },
  { url: 'https://digicodestv.com/lovable-uploads/a1edc528-8c05-4d1b-9401-f661cf467121.png', dest: 'images/channels/ch-09.png' },
  { url: 'https://digicodestv.com/lovable-uploads/320ee8ad-d2cd-4e69-a04a-935db74a7cd0.png', dest: 'images/channels/ch-10.png' },
  { url: 'https://digicodestv.com/lovable-uploads/107cd36d-45e5-47e5-8c1b-be2558c3c9be.png', dest: 'images/channels/ch-11.png' },
  { url: 'https://digicodestv.com/lovable-uploads/67b62ce6-cf7e-416a-9a93-e99342fda4de.png', dest: 'images/channels/ch-12.png' },
  { url: 'https://digicodestv.com/lovable-uploads/fd85dec1-273c-4bee-8d19-4ca4d4fb9f70.png', dest: 'images/channels/ch-13.png' },
  { url: 'https://digicodestv.com/lovable-uploads/001831fc-8a9a-4934-a8e1-46d5a37f28b1.png', dest: 'images/channels/ch-14.png' },
  { url: 'https://digicodestv.com/lovable-uploads/93369781-551e-42d0-b2cd-4dc091223a8d.png', dest: 'images/channels/ch-15.png' },
  { url: 'https://digicodestv.com/lovable-uploads/78fc0010-5845-453f-a05c-4c61d5ed2784.png', dest: 'images/channels/ch-16.png' },
  { url: 'https://digicodestv.com/lovable-uploads/5d0f439e-43f5-4836-bce6-48777a94c12e.png', dest: 'images/channels/ch-17.png' },
  { url: 'https://digicodestv.com/lovable-uploads/817cd295-be63-4d36-a875-14f44549f80f.png', dest: 'images/channels/ch-18.png' },
  { url: 'https://digicodestv.com/lovable-uploads/4c677e74-39ef-4413-8f15-9c9fbd7f2b05.png', dest: 'images/channels/ch-19.png' },
  { url: 'https://digicodestv.com/lovable-uploads/b23f41b2-e938-46e9-9fcc-9d471d321543.png', dest: 'images/channels/ch-20.png' },
  { url: 'https://digicodestv.com/lovable-uploads/311dfce2-a0e0-4ab0-8ed0-36cfd5aa5053.png', dest: 'images/channels/ch-21.png' },
  { url: 'https://digicodestv.com/lovable-uploads/2f88984e-e34c-4650-bdec-93c347136cdf.png', dest: 'images/channels/ch-22.png' },
  { url: 'https://digicodestv.com/lovable-uploads/d31574e2-629f-45a9-8293-7079b356c739.png', dest: 'images/channels/ch-23.png' },
  { url: 'https://digicodestv.com/lovable-uploads/997cc08f-34ec-427d-bad4-5cd502d5651f.png', dest: 'images/channels/ch-24.png' },
  { url: 'https://digicodestv.com/lovable-uploads/7f31056e-ddf9-4d9b-8463-222d96197a46.png', dest: 'images/channels/ch-25.png' },
  { url: 'https://digicodestv.com/lovable-uploads/4f7bd215-cf84-4a83-86c0-addcaed64023.png', dest: 'images/channels/ch-26.png' },
];

async function download(url, dest) {
  const fullPath = join(PUBLIC, dest);
  mkdirSync(dirname(fullPath), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = await res.arrayBuffer();
  writeFileSync(fullPath, Buffer.from(buf));
  console.log(`✓ ${dest}`);
}

async function run() {
  const BATCH = 4;
  for (let i = 0; i < assets.length; i += BATCH) {
    const batch = assets.slice(i, i + BATCH);
    await Promise.all(batch.map(a => download(a.url, a.dest).catch(e => console.error(`✗ ${a.dest}: ${e.message}`))));
  }
  console.log('\nDone!');
}

run();
