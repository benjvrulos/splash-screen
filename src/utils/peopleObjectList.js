const peopleList = [
  "Miguel Torres",
  "Ana Martínez",
  "Luis Rodríguez",
  "Carla Gutiérrez",
  "Javier López",
  "Sofía Pérez",
  "Diego Ramírez",
  "María García",
  "Carlos Hernández",
  "Laura Díaz",
  "Andrés Fernández",
  "Valentina Sánchez",
  "Ricardo González",
  "Gabriela Cruz",
  "Alejandro Morales",
  "Camila Ruiz",
  "Juan Torres",
  "Valeria Ortiz",
  "Manuel Castro",
  "Andrea Núñez",
  "Gabriel Vargas",
  "Natalia Herrera",
  "Francisco Jiménez",
  "Isabel Silva",
  "Pedro Velázquez",
  "Paula Martínez",
  "Javier Reyes",
  "Elena Medina",
  "Daniel Bravo",
  "Lucía Mendoza",
  "Miguel Ángel Pérez",
  "Daniela Torres",
  "José García",
  "Marta López",
  "Adrián Rodríguez",
  "Sara Pérez",
  "Fernando Flores",
  "Carolina Díaz",
  "Sergio Rivas",
  "Beatriz Ramírez",
  "Guillermo Reyes",
  "Claudia Castro",
  "Antonio Moreno",
  "Patricia Gómez",
  "Ignacio Ruiz",
  "Rosa Sánchez",
  "Hugo González",
  "Laura Torres",
  "Emilio Soto",
  "Julia Morales",
  "Víctor Mora",
  "Diana Muñoz",
  "Rafael Domínguez",
  "Marina Gallego",
  "Ángel López",
  "Elena Martínez",
  "Javier Núñez",
  "Laura Rodríguez",
  "Jorge Pérez",
  "Mariana Sánchez",
  "Marcos Santos",
  "Clara Ramírez",
  "Mateo Herrera",
  "Ana Beltrán",
  "Iván García",
  "Sofía Ruiz",
  "Adriana Castro",
  "Sebastián Torres",
  "Inés López",
  "Esteban Jiménez",
  "Victoria Soto",
  "Lucas Díaz",
  "Valentina Muñoz",
  "Guillermo González",
  "Laura Navarro",
  "Alex Fernández",
  "Andrea Ramos",
  "Javier Rojas",
  "Gabriela López",
  "Carlos Espinosa",
  "Verónica Pérez",
  "David Sánchez",
  "Elena Gutiérrez",
  "Juan Pablo Torres",
  "Natalia Ramírez",
  "Miguel Ángel Martínez",
  "María José García",
  "Alejandro Díaz",
  "Laura Castillo",
  "Diego López",
  "Ana María Rodríguez",
  "Gabriel Castro",
  "Adriana Torres",
  "Alejandro Gómez",
  "Valeria Morales",
  "Federico Herrera",
  "Elena Pérez",
  "José Antonio Ruiz",
  "Alejandra Hernández",
  "Raúl Flores",
];
export const peopleObjectList = peopleList.map((nombre, index) => ({
  id: index,
  foto: `https://picsum.photos/id/${Math.floor(Math.random() * 101)}/1920/1080`,
  nombre,
}));

export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const userLayout = {
  email: "admin@gmail.com",
  password: "12345",
};
