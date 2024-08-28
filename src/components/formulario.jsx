import React, { useState } from "react";

const Formulario = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState({
    Hombre: false,
    Mujer: false,
    Descuento: false,
    Ropa: false,
    Calzado: false,
  });
  const [newCategory, setNewCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imageError, setImageError] = useState("");
  const [offerAmount, setOfferAmount] = useState(0);

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setCategories((prevCategories) => ({
      ...prevCategories,
      [name]: checked,
    }));
  };

  const handleAddCategory = () => {
    const trimmedCategory = newCategory.trim();
    if (trimmedCategory && !categories.hasOwnProperty(trimmedCategory)) {
      setCategories((prevCategories) => ({
        ...prevCategories,
        [trimmedCategory]: false,
      }));
      setNewCategory("");
    }
  };

  const handleDeleteCategory = (category) => {
    setCategories((prevCategories) => {
      const updatedCategories = { ...prevCategories };
      delete updatedCategories[category];
      return updatedCategories;
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      setImageError("Puedes subir un máximo de 3 imágenes.");
    } else {
      setImages(files);
      setImageError("");
    }
  };

  const mostrarDatos = (e) => {
    e.preventDefault();
    const selectedCategories = Object.keys(categories).filter(
      (category) => categories[category]
    );

    console.log({
      productName,
      description,
      selectedCategories,
      images,
      offerAmount: categories.Descuento ? offerAmount : null,
    });

    // Resetea el formulario
    setProductName("");
    setDescription("");
    setCategories({
      Hombre: false,
      Mujer: false,
      Descuento: false,
      Ropa: false,
      Calzado: false,
    });
    setImages([]);
    setImageError("");
    setOfferAmount(0);
  };

  return (
    <div className="text-bg-dark" data-bs-theme="dark">
      <div className="py-5">
        <h1 className="text-center">
          <strong>Productos</strong>
        </h1>
      </div>
      <div className="container">
        <form onSubmit={mostrarDatos}>
          {/* Nombre del Producto */}
          <div className="mb-3">
            <label className="form-label">Nombre del producto</label>
            <input
              type="text"
              className="form-control"
              placeholder="Campera Hombre Roja - Vans"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          {/* Descripción */}
          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              className="form-control"
              placeholder="Campera abrigada con piel de león por dentro."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
            />
          </div>

          {/* Categorías */}
          <div className="mb-3">
            <label className="form-label">Categorías</label>
            <div className="d-flex flex-wrap">
              {Object.keys(categories).map((category) => (
                <div
                  key={category}
                  className="form-check form-check-inline align-items-center"
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name={category}
                    id={category}
                    checked={categories[category]}
                    onChange={handleCategoryChange}
                  />
                  <label className="form-check-label me-2" htmlFor={category}>
                    {category}
                  </label>
                  {!["Hombre", "Mujer", "Descuento", "Ropa", "Calzado"].includes(
                    category
                  ) && (
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteCategory(category)}
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
            </div>
            {/* Agregar Nueva Categoría */}
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nueva categoría"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddCategory}
                disabled={!newCategory.trim()}
              >
                Agregar
              </button>
            </div>
          </div>

          {/* Oferta */}
          {categories.Descuento && (
            <div className="mb-3">
              <label className="form-label">Cantidad de la oferta (%)</label>
              <input
                type="range"
                className="form-range"
                min={0}
                max={100}
                value={offerAmount}
                onChange={(e) => setOfferAmount(e.target.value)}
              />
              <div>
                <span>{offerAmount}% de descuento</span>
              </div>
            </div>
          )}

          {/* Imágenes */}
          <div className="mb-3">
            <label className="form-label">Imágenes del producto</label>
            <input
              type="file"
              className="form-control"
              multiple
              onChange={handleImageChange}
              accept="image/*"
            />
            {imageError && (
              <div className="text-danger mt-2">{imageError}</div>
            )}
            {images.length > 0 && !imageError && (
              <div className="mt-2">
                <p>
                  <strong>Imágenes seleccionadas:</strong>
                </p>
                <ul>
                  {images.map((image, index) => (
                    <li key={index}>{image.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Botón de Submit */}
          <div className="text-center pb-5">
            <button type="submit" className="btn btn-success">
              Agregar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
