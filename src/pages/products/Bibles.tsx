
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const BiblesPage = () => {
  // Condensed specifications
  const specifications = [
    { name: 'Binding Options', description: 'Case bound, Flexibound, PU leather, Bonded leather, Genuine leather, Thread sewn' },
    { name: 'Cover Finishes', description: 'Foil stamping, Embossing/Debossing, Spot UV, Heat stamping, Custom die-cutting' },
    { name: 'Paper Options', description: 'Bible paper (25-40 gsm), Cream/white options, Acid-free archival quality' },
    { name: 'Ribbon Markers', description: 'Single or multiple ribbon markers, Custom colored ribbons' },
    { name: 'Size Range', description: 'Pocket bibles (3" x 5"), Standard (5" x 8"), Large print (6" x 9")' },
    { name: 'Special Features', description: 'Thumb indexing, Zipper closures, Magnetic closures, Presentation pages' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Leather Bible",
      image: "/lovable-uploads/b98f5f4b-72df-44dc-af9a-311dbd32d7b9.png",
      description: "Genuine leather bound bible with gilt edges and ribbon markers."
    },
    {
      id: 2,
      name: "Quick & Easy Read Bible",
      image: "/lovable-uploads/2f2aae99-f265-4fd0-b889-bf7e257a105a.png",
      description: "Compact bible with clear font and lightweight design."
    },
    {
      id: 3,
      name: "Children's Bible Stories",
      image: "/lovable-uploads/24d66b50-8e31-436b-9bd8-30f9c3bdd8f7.png",
      description: "Colorful bible stories perfect for young readers with illustrations."
    },
    {
      id: 4,
      name: "Hebrew Bible",
      image: "/lovable-uploads/07ae5723-0a7d-4b11-8219-392e2a8708f8.png",
      description: "Traditional Hebrew text with elegant binding and design."
    },
  ];

  const ProductionProcess = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src="/lovable-uploads/efc2096b-4148-4f2e-894f-cad1a146d9ac.png" 
            alt="Bible printing process" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#007041] mb-2">1. Printing & Binding</h3>
          <p className="text-sm text-gray-600">
            Our bible production begins with high-quality printing on specialized bible paper, followed by precise binding techniques.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src="/lovable-uploads/c1ca3f78-92fc-42db-9165-7fa2854a9436.png" 
            alt="Bible cover crafting" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#007041] mb-2">2. Cover Crafting</h3>
          <p className="text-sm text-gray-600">
            Premium materials are selected for covers, from PU to genuine leather, with detailed embossing and foil stamping.
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img 
            src="/lovable-uploads/0d72df48-8c36-45ea-9e05-859074df084a.png" 
            alt="Bible finishing process" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#007041] mb-2">3. Finishing Touches</h3>
          <p className="text-sm text-gray-600">
            Each bible receives careful inspection and finishing touches, including ribbon markers, gilt edges, and quality control.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <ProductDetailLayout
      title="Bibles"
      description="King Tai specializes in crafting premium bibles and sacred texts with meticulous attention to detail. Our bible printing combines traditional craftsmanship with modern technology to produce heirloom-quality religious texts. From luxurious leather-bound editions to specialized children's bibles, we offer comprehensive customization options."
      images={[
        "/lovable-uploads/2f2aae99-f265-4fd0-b889-bf7e257a105a.png",
        "/lovable-uploads/efc2096b-4148-4f2e-894f-cad1a146d9ac.png",
        "/lovable-uploads/c1ca3f78-92fc-42db-9165-7fa2854a9436.png",
        "/lovable-uploads/07ae5723-0a7d-4b11-8219-392e2a8708f8.png",
        "/lovable-uploads/24d66b50-8e31-436b-9bd8-30f9c3bdd8f7.png",
      ]}
      specifications={specifications}
      featuredProducts={featuredProducts}
      productionProcess={<ProductionProcess />}
    />
  );
};

export default BiblesPage;
