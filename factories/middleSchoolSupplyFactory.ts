import SchoolSupplyFactory from './schoolSupplyFactory';
import { MediumPencil, MediumNotebook, AdvancedEraser } from '../products';

class MiddleSchoolSupplyFactory implements SchoolSupplyFactory {
    createPencil(): Pencil {
        return new MediumPencil();
    }

    createNotebook(): Notebook {
        return new MediumNotebook();
    }

    createEraser(): Eraser {
        return new AdvancedEraser();
    }
}

export default MiddleSchoolSupplyFactory;
