
import React from 'react';
import ProductDetailLayout from '@/components/ProductDetailLayout';

const CosmeticBoxesPage = () => {
  return (
    <ProductDetailLayout
      title="Cosmetic Boxes"
      description="Our premium cosmetic boxes combine elegant design with sturdy construction. Perfect for beauty brands, these boxes feature high-quality printing, premium finishes, and customizable inserts to showcase your products beautifully."
      images={[
        "/images/packaging/cosmetic-boxes/cosmetic-boxes-main.png",
        "/images/packaging/cosmetic-boxes/cosmetic-boxes-1.png",
        "/images/packaging/cosmetic-boxes/cosmetic-boxes-2.png",
        "/images/packaging/cosmetic-boxes/cosmetic-boxes-3.png",
        "/images/packaging/cosmetic-boxes/cosmetic-boxes-4.png",
        "/images/packaging/cosmetic-boxes/cosmetic-boxes-5.png",
        "/images/packaging/cosmetic-boxes/cosmetic-boxes-6.png"
      ]}
      specifications={[
        { name: "Materials", description: "Premium card, Rigid board, Eco-friendly options" },
        { name: "Size Options", description: "Standard sizes, Custom dimensions available" },
        { name: "Printing", description: "Full color CMYK, Pantone matching, Foil stamping" },
        { name: "Finish Options", description: "Matte, Gloss, Soft-touch, Embossing" },
        { name: "Special Features", description: "Windows, Custom inserts, Magnetic closures" },
        { name: "Minimum Order", description: "100 boxes" },
      ]}
      featuredProducts={[]}
      productionProcess={
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">1. Design</div>
            <p className="text-sm text-gray-600">Box structure and graphics design</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">2. Production</div>
            <p className="text-sm text-gray-600">Printing, cutting and scoring</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">3. Finish</div>
            <p className="text-sm text-gray-600">Adding lamination, foil, and special finishes</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">4. Die-Cut</div>
            <p className="text-sm text-gray-600">Precision cutting and scoring for folding</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-[#007041] font-semibold mb-2">5. Assembly</div>
            <p className="text-sm text-gray-600">Gluing, folding and final quality check</p>
          </div>
        </div>
      }
    />
  );
};

export default CosmeticBoxesPage;
