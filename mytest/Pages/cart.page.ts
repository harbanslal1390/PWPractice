import{Page} from '@playwright/test'
import UploadComponet from './component/upload.component'
class CartPage{
    private page:Page
    constructor(page:Page)
    {
        this.page=page
    }
    uploadcomponet(){
        return new UploadComponet(this.page)
    }
}

export default CartPage;