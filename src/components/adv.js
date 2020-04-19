import React,{Component} from 'react';
import styled from 'styled-components';
class Adv extends Component{
        render(){
            return(
                <React.Fragment>
                <Container className="py-5 px-5">
                    <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label className="d-flex text-subtitle" for="inputEmail4 d-flex">عنوان الاعلان</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="العنوان"/>
    </div>
    <div className="form-group col-md-6">
      <label className="d-flex text-subtitle" for="inputPassword4 d-flex">السعر</label>
      <input type="number" className="form-control" id="inputPassword4" placeholder="السعر"/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <label className="d-flex text-subtitle" for="inputState1">الموقع</label>
      <select id="inputState1" className="form-control">
      
      <option value="" data-select2-id="3">الموقع...</option>
<option value="غزة">غزة</option>
<option value="بيت حانون">بيت حانون</option>
<option value="بيت لاهيا">بيت لاهيا</option>
<option value="جباليا">جباليا</option>
<option value="الجلاء">الجلاء</option>
<option value="النصر">النصر</option>
<option value="الرمال">الرمال</option>
<option value="الشيخ رضوان">الشيخ رضوان</option>
<option value="عمر المختار">عمر المختار</option>
<option value="الشجاعية">الشجاعية</option>
<option value="البريج">البريج</option>
<option value="النصيرات">النصيرات</option>
<option value="السوارحة">السوارحة</option>
<option value="الزوايدة">الزوايدة</option>
<option value="المغازي">المغازي</option>
<option value="الدير">الدير</option>
<option value="خانيونس">خانيونس</option>
<option value="القرارة">القرارة</option>
<option value="خزاعة">خزاعة</option>
<option value="رفح">رفح</option>
                                           </select>
    </div>
    <div className="form-group col-md-6">
      <label className="d-flex text-subtitle" for="inputState2">النوع</label>
      <select id="inputState2" className="form-control">
      <option value="" data-select2-id="3">النوع...</option>
          <option value="للبيع">للبيع</option>
          <option value="للايجار">للايجار</option>
                </select>
    </div>
  </div>
  <div className="form-group">
    <label className="d-flex text-subtitle" for="inputAddress">التفاصيل</label>
    <textarea className="form-control" id="inputAddress" placeholder="اكتب وصف الاعلان">
      </textarea>
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
    <label className="d-flex text-subtitle" for="room ">غرف</label>
      <input type="number" className="form-control" id="room" placeholder="عدد الغرف"/>
      </div>
      <div className="form-group col-md-4">
    <label className="d-flex text-subtitle" for="kitchen">مطبخ</label>
      <input type="number" className="form-control" id="kitchen" placeholder="عدد المطابخ"/>
      </div>
      <div className="form-group col-md-4">
    <label className="d-flex text-subtitle" for="living">صالة</label>
      <input type="number" className="form-control" id="living" placeholder="عدد الصالات"/>
      </div>


      </div>
 
      <div className="form-row">
    <div className="form-group col-md-4">
    <label className="d-flex text-subtitle" for="bath">حمام</label>
      <input type="number" className="form-control" id="bath" placeholder="عدد الحمامات"/>
      </div>
      <div className="form-group col-md-4">
    <label className="d-flex text-subtitle" for="floor">طوابق</label>
      <input type="number" className="form-control" id="floor" placeholder="عدد الطوابق"/>
      </div>
      <div className="form-group col-md-4">
    <label className="d-flex text-subtitle" for="area">المساحة</label>
      <input type="number" className="form-control" id="area" placeholder=" المساحة"/>
      </div>

      </div>
      <div className="add-img mt-5 ">
      <div className="header-icon text-subtitle d-flex ">
                        <span className="icon ml-2"> <i className="far fa-image"></i></span>
                        <span>أضف الصور</span>
                    </div>
      
                    <div class="input-group">
  <div className="input-group-prepend">
   
  </div>
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"/>
    <label className="custom-file-label d-flex" for="inputGroupFile01">اختيار ملف</label>
  </div>
</div>
      </div>

  <button type="submit" className="btn btn-primary text-subtitle mt-2 d-flex">حفظ</button>
</form>

                </Container>
                </React.Fragment>
            )
        }
}
export default Adv;
const Container=styled.div`
direction:rtl;
 `