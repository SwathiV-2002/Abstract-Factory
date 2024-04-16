import SchoolSupplyFactory from './schoolSupplyFactory';
import { ShortPencil, SmallNotebook, BasicEraser } from '../products';

class ElementarySchoolSupplyFactory implements SchoolSupplyFactory {
    createPencil(): Pencil {
        return new ShortPencil();
    }

    createNotebook(): Notebook {
        return new SmallNotebook();
    }

    createEraser(): Eraser {
        return new BasicEraser();
    }
}

export default ElementarySchoolSupplyFactory;
