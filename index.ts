import SchoolSupplyFactory from './factories/schoolSupplyFactory';
import ElementarySchoolSupplyFactory from './factories/elementarySchoolSupplyFactory';
import MiddleSchoolSupplyFactory from './factories/middleSchoolSupplyFactory';
import Pencil from './products/pencil';
import Notebook from './products/notebook';
import Eraser from './products/eraser';
const elementaryFactory: SchoolSupplyFactory = new ElementarySchoolSupplyFactory();
const middleSchoolFactory: SchoolSupplyFactory = new MiddleSchoolSupplyFactory();

const elementaryPencil: Pencil = elementaryFactory.createPencil();
const elementaryNotebook: Notebook = elementaryFactory.createNotebook();
const elementaryEraser: Eraser = elementaryFactory.createEraser();

console.log("Elementary School Supplies:");
console.log("Pencil:", elementaryPencil.getDescription());
console.log("Notebook:", elementaryNotebook.getDescription());
console.log("Eraser:", elementaryEraser.getDescription());

const middleSchoolPencil: Pencil = middleSchoolFactory.createPencil();
const middleSchoolNotebook: Notebook = middleSchoolFactory.createNotebook();
const middleSchoolEraser: Eraser = middleSchoolFactory.createEraser();

console.log("\nMiddle School Supplies:");
console.log("Pencil:", middleSchoolPencil.getDescription());
console.log("Notebook:", middleSchoolNotebook.getDescription());
console.log("Eraser:", middleSchoolEraser.getDescription());
