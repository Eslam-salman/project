import React,{Component} from 'react';
import styled from 'styled-components';
class Adv extends Component{
  constructor(props) {
    super(props);
    this.state = {typeselect:"",
    placeselect:"",
    catselect:"",
    typeError:"يرجى اختيار النوع",
    placeErrror:"يرجى اختيار الموقع",
    catError:"يرجى اختيار قسم",
    redirect:false,
    result:" "
    };
    this.handletypeChange = this.handletypeChange.bind(this);
    this.handleplaceChange= this.handleplaceChange.bind(this);
    this.handlecategoryChange= this.handlecategoryChange.bind(this);
    this.handelsubmit= this.handelsubmit.bind(this);
}

handletypeChange=(e)=>{
  var typeselect =e.target.value;
  var typeError=" ";
  
  if (typeselect === null){typeError = "يرجى اختيار النوع";}
  
  this.setState({typeselect:typeselect,
      typeError:typeError
  });
};
handlecategoryChange=(e)=>{
  var catselect =e.target.value;
  var catError=" ";
  
  if (catselect === null){catError = "يرجى اختيار النوع";}
  
  this.setState({catselect:catselect,
      catError:catError
  });
};
handleplaceChange=(e)=>{
    var placeselect=e.target.value;
    var placeError=" ";
    if (placeselect === null){placeError = "يرجى اختيار الموقع";}
  this.setState({placeselect:placeselect,
      placeErrror:placeError
      
  })
};
handelsubmit=(event)=>{
  event.preventDefault();
 
      if (this.state.placeselect&&this.state.typeselect&&this.state.catselect) {
          return( this.setState({
              redirect:true
          }))
           
         
      } else {
          return(null)
            
      } 
  }
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
    <div className="form-group col-md-12">
      <label className="d-flex text-subtitle" for="inputState2">القسم</label>
      <select id="inputState2" className="form-control" value={this.state.catselect} onChange={this.handlecategoryChange}>
      <option value="" data-select2-id="3">القسم...</option>
          <option value="شقق">شقق</option>
          <option value="فيلا">فلل</option>
          <option value="استديوهات وغرف">استديوهات وغرف</option>
          <option value="أراضي">أراضي</option>
          <option value="شاليهات">شاليهات</option>
          <option value="عمارات">عمارات</option>
                </select>
    </div>
  </div>
  <div className="form-group">
    <label className="d-flex text-subtitle" for="inputAddress">التفاصيل</label>
    <textarea className="form-control" id="inputAddress" placeholder="اكتب وصف الاعلان">
      </textarea>
  </div>
  {(()=> { 
    if(this.state.catselect!=='أراضي' ){
      return(
      <React.Fragment>
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
      <div className="form-group col-md-6">
      <label className="d-flex text-subtitle" for="bath">حمام</label>
        <input type="number" className="form-control" id="bath" placeholder="عدد الحمامات"/>
        </div>
        <div className="form-group col-md-6">
      <label className="d-flex text-subtitle" for="floor">طوابق</label>
        <input type="number" className="form-control" id="floor" placeholder="عدد الطوابق"/>
        </div></div>
        </React.Fragment>)
    }
    else{
      return (null)
    }
      })()}
  
      <div className="form-group col-md-12">
    <label className="d-flex text-subtitle" for="area">المساحة</label>
      <input type="number" className="form-control" id="area" placeholder=" المساحة"/>
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