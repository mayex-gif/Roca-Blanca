export const createProductSlug = (title, id) => {
    const slugTitle = title
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')       // Reemplaza espacios con guiones
        .replace(/[^\w\-]+/g, '')    // Elimina todos los caracteres no válidos
        .replace(/\-\-+/g, '-')      // Reemplaza múltiples guiones por uno solo
        .replace(/^-+/, '')          // Elimina guiones desde el inicio
        .replace(/-+$/, '');         // Elimina guiones desde el final

    return `${slugTitle}-${id}`;      // Concatena el ID al final del slug
};
