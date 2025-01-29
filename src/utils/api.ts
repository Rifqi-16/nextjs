export async function getProducts() {
  try {
    const res = await fetch('https://api.escuelajs.co/api/v1/products', {
      next: {
        revalidate: 60,
        tags: ['products']
      },
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    });

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function getProduct(id: string) {
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      next: {
        revalidate: 300,
        tags: [`product-${id}`]
      },
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch product ${id}`);
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}