import React, {useState,useEffect} from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import SmallQuoteComponent from '../components/smallQuoteComponent';
import smallQuoteImg from '../../static/previewThumbnails/smallQuoteThumbnail.png'
import CopyToClipboardBtn from "../components/CopyToClipboardBtn"
import PreviewCodeComponent from "../components/previewCodeComponent"
import BlogComponentsErrorMessage from '../components/blogComponentsErrorMessage'

export default function SmallQuote () {
    const [fullContent,setFullContent] = useState(false);
    const [selectedColor,setSelectedColor] = useState('');
    const [quoteContent,setQuoteContent] = useState({
     quote:'',
     author:'',
     secondLine:''
    })

    const [errorMessage, setErrorMessage] =useState(false);
    const errorText = 'Some data is missing'
    const [preview, setPreview] = useState(false)

    useEffect(() => {
        addBorder()
    },[])

    const addBorder =()=>{
      const allWrappers = document.querySelectorAll('.colors button');
      allWrappers.forEach((element)=> {
          element.addEventListener("click", ()=>{
              const prevSelected = document.querySelectorAll(".colors button")
              prevSelected.forEach(selection=> selection.style.border="0")
              
              element.style.border="5px solid #fff";
  
          }, false);
      })
  }

    const handleClick=(e)=> {
      e.preventDefault();
      let isContentEmpty = Object.values(quoteContent).some(items => items === '');
      if(isContentEmpty || selectedColor === "") {
          setErrorMessage(true)
      } else {
        setPreview(true)
          setErrorMessage(false)
      }
    }

    const basicCode=`
    <div class="smallQuote ${selectedColor}">
      <div class="centered-border" style="margin-bottom:30px;"></div>
      <p className="my-3">${quoteContent.quote}</p>
      <div class="author"><h3 className="font-black">${quoteContent.author}</h3></div>
      <div class="second-line">${quoteContent.secondLine}</div>
      <div class="centered-border" style="margin-top:30px;"></div>
    </div>
    `

    const theHtml = `  
    <div class="smallQuote ${selectedColor}">
      <div class="centered-border" style="margin-bottom:30px;"></div>
      <p className="my-3">${quoteContent.quote}</p>
      <div class="author"><h3 className="font-black">${quoteContent.author}</h3></div>
      <div class="second-line">${quoteContent.secondLine}</div>
      <div class="centered-border" style="margin-top:30px;"></div>
    </div>
      `

      const theCss=`
/* SMALLQUOTE */

.smallQuote {
  padding:5px 40px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}


.smallQuote .author,.smallQuote .second-line {
  display:flex;
  justify-content:center;
  margin:0px 0;
}

.smallQuote .author {
font-weight:bold;
}

.centered-border{
  width:50%;
  height:2px;
}

.smallQuote-general-dark-bg {
  color:var(--russian-violet-dark);
}

.smallQuote-general-dark-bg .centered-border {
  border:2px solid var(--russian-violet-dark);
}

.smallQuote-ob-bg {
  color:var(--russian-violet-dark);
}

.smallQuote-ob-bg .centered-border {
  border:2px solid var(--ob-dark);
}

.smallQuote-ob-bg h3 {
 color:var(--ob-dark);
 font-weight: bold;
}


.smallQuote-og-bg {
  color:var(--russian-violet-dark);
}

.smallQuote-og-bg .centered-border {
  border:2px solid var(--og-dark);
}

.smallQuote-og-bg h3 {
 color:var(--og-dark);
 font-weight: bold;
}

.smallQuote-oh-bg {
  color:var(--russian-violet-dark);
}

.smallQuote-oh-bg .centered-border {
  border:2px solid var(--oh-dark);
}

.smallQuote-oh-bg h3 {
 color:var(--oh-dark);
 font-weight: bold;

}

.smallQuote-os-bg {
  color:var(--russian-violet-dark);
}

.smallQuote-os-bg .centered-border {
  border:2px solid var(--os-dark);
}

.smallQuote-os-bg h3 {
 color:var(--os-dark);
 font-weight: bold;
 /* font-size:18px; */
}  
`

  return (
    <Layout>
      <Container className="my-5">
      <div className="row">
        <h3 className="fw-bold">Small Quote</h3>
          <p>Example component</p>
          <PreviewCodeComponent basicCode={basicCode} theCss={theCss} img={smallQuoteImg}/>
        </div>
        <Row>
          <Col md={6} id="left-side">
              <section id="colorButtons">
                  <p>Select color</p>
              <Row>
                  <Col md={2} className="colors ">
                      <button className="dark-purple-btn colorBtn"
                  onClick={(e) => {
                    setSelectedColor('smallQuote-general-dark-bg')
                    setPreview(false)
                    setErrorMessage(false)
                
                  }}
                  ></button></Col>
    
                  <Col md={2} className="colors ">
                      <button className="ob-dark-btn colorBtn"
                      onClick={(e) => {
                
                        setSelectedColor('smallQuote-ob-bg')
                        setPreview(false)
                        setErrorMessage(false)
                    
                      }}
                      ></button></Col>
          
                  <Col md={2} className="colors ">
                      <button className="og-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('smallQuote-og-bg')
                        setPreview(false)
                        setErrorMessage(false)
                      }}
                  ></button></Col>

                  <Col md={2} className="colors ">
                      <button className="oh-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('smallQuote-oh-bg')
                        setPreview(false)
                        setErrorMessage(false)
                      }}>
                          </button></Col>
  
                  <Col md={2} className="colors ">
                      <button className="os-dark-btn colorBtn"
                      onClick={(e) => {
                        setSelectedColor('smallQuote-os-bg')
                        setPreview(false)
                        setErrorMessage(false)
                      }}>
                          </button></Col>
      
                  
               
              </Row>
              </section>
            <Form>

              <Form.Group controlId="">
                <Form.Label>Quote:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setQuoteContent({...quoteContent,quote:e.target.value});
                    setPreview(false)
                    setErrorMessage(false)
                }}/>
              </Form.Group>

              <Form.Group controlId="">
                <Form.Label>Author:</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e)=>{
                    setQuoteContent({...quoteContent,author:e.target.value});
                    setPreview(false)
                    setErrorMessage(false)
                }}/>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Second Line</Form.Label>
                <Form.Control as="textarea" rows={4}  onChange={(e) => {
                          setQuoteContent({...quoteContent,secondLine:e.target.value});
                          setPreview(false)
                          setErrorMessage(false)
                        }}
                />
              </Form.Group>
    

              <Button variant="primary" type="submit" onClick={handleClick} className="my-5 btn-mainColor">
                Get Code
              </Button>
            </Form>
          </Col>
          <Col md={6} id="right-side">
          {preview && <div className="d-flex justify-content-between"> 
            <h6 className="">Copy your code:</h6>
            <CopyToClipboardBtn theHtml={theHtml} />
          </div>
          }
              <div id="theCode">
              {errorMessage ? <BlogComponentsErrorMessage message="Please complete all the fields"/> : null}
                  {preview ? 
                <SmallQuoteComponent 
                selectedColor={selectedColor}
                quote={quoteContent.quote}
                author={quoteContent.author}
                secondLine={quoteContent.secondLine}

                /> : null  
                }
              
              </div>
          </Col>
        </Row>  

        {preview ? (
          <Row>
            <Col md={12}>
              <h6 className="fw-bold">Preview component</h6>
              <div
                dangerouslySetInnerHTML={{ __html: theHtml }}
                className={selectedColor}
              />
            </Col>
          </Row>
        ) : null}

      </Container>
    </Layout>
  )
}
