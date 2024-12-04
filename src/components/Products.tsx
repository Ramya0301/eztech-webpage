import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Bot, LayoutGrid, ClipboardEdit } from 'lucide-react';
import { products } from '../data/products';

const icons: Record<string, React.ComponentType> = {
  Bot,
  LayoutGrid,
  ClipboardEdit
};

export function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            {t('products.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = icons[product.icon];
            return (
              <div
                key={index}
                className="relative group bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t(`products.items.${product.title}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t(`products.items.${product.title}.description`)}
                  </p>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2" />
                        {t(`products.items.${product.title}.features.${idx}`)}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    {t('products.learnMore')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
