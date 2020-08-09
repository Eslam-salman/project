import React,{Component} from 'react';
import styled from 'styled-components';
import{Link} from "react-router-dom";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Search extends Component{

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
        const {redirect} = this.state

        if (redirect){
            return (<Redirect to={{
                pathname: '/result',
                state: { referrer: this.state}
            }} />)
            
        }
       
       
        return(
            <div>
            <Section className="py-3">
            <div className="container  expand-sm px-sm-5">
                <div className="m-auto search box-filter" >


                    <div className="row mx-auto" >
                       <div className="col-12 mx-auto my-3 col-md-9 col-sm-12 col-lg-7">
                       <H5 className="d-inline-block mb-0 title d-flex p-2 ">
                            <img src="https://dubarter.com/frontend/assets/img/shape-four.png" alt="" className="img-fluid"/> 
                            عقارات
                        </H5>
                        <Filter className="filter cat-form px-2 ">
                            <link></link>
                            <form className="mb-0" onSubmit={this.handelsubmit}>
                                <div className="row">
                                    <div className="col-lg-12  d-flex changable-region">
                                    <div  className="custom-select-2 b-left py-3 pr-2"style={{width:"50rem"}} >
                                       <select className="custom-select text-subtitle" value={this.state.catselect}    
                                         onChange={this.handlecategoryChange} id="inlineFormCustomSelect" >
                                        <option value="" data-select2-id="3">القسم...</option>
                                       <option value="شقق">شقق</option>
                                        <option value="فيلا">فلل</option>
                                        <option value="استديوهات وغرف">استديوهات وغرف</option>
                                        <option value="أراضي">أراضي</option>
                                        <option value=" شاليهات"> شاليهات</option>
                                        <option value="عمارات">عمارات</option>
                                       </select>
                                          </div>
                                    <div  className="custom-select-2 b-left py-3 "style={{width:"50rem"}} >
                                       <select className="custom-select text-subtitle" value={this.state.typeselect}    
                                         onChange={this.handletypeChange} id="inlineFormCustomSelect" >
                                        <option value="" data-select2-id="3">النوع...</option>
                                       <option value="للبيع">للبيع</option>
                                        <option value="للايجار">للايجار</option>
                                       </select>
                                          </div>
                                       <div  className="custom-select-2 b-left py-3 pr-0"style={{width:"50rem"}} >
                                       <select className="custom-select text-subtitle" value={this.state.placeselect}
                                           onChange={this.handleplaceChange}  id="inlineFormCustomSelect" >
                                       
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
                                    <div className="py-3" >
                                    {(()=> { 
                                        if(this.state.placeselect&&this.state.typeselect&&this.state.catselect){
                                            return(<Link  to={{ pathname: `/result`, state: { referrer:this.state} }}
                                            className={`card-wrapper restore-${this.state}`}
                                          >
                                                                    
                                                                  <button   className="btn search-btn px-5 text-bright"><span>بحث</span></button>
                                                                </Link>)
                                        }
                                        else{
                                           return(<button   className="btn search-btn px-5 text-bright"><span>بحث</span></button> ) 
                                        }
                                    
                                    })()}
                                    
            
                                    
                                    </div>
                                    
                                    </div>
                                </div>

                            </form>

                        </Filter>
                           </div>
                    
                    </div>
                </div>
            </div>
            </Section>
            </div>

        );
    }}
    export default Search;
    const Section=styled.div`
    background-image:url(https://dubarter.s3-eu-west-1.amazonaws.com/2019/01/1130463244882710640.jpg);
    direction:rtl;
    
    
    `
    const H5=styled.h5`
    color:#fff;background:#0b82c6;
    width:8rem;

    `
    const Filter=styled.div`
    color:#fff;background: #0b82c6;
    width:auto
    outline: none !important;
    
    `
   