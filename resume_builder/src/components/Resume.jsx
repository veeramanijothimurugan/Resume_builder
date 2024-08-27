import React, { useContext } from "react";
import pdfMake from 'pdfmake/build/pdfmake';


import "../components/resume.css";
import {
  certifyContex,
  eduContex,
  extraContex,
  headerContext,
  objectiveContext,
  projectContex,
  showEduContex,
  skillContex,
} from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


const Resume = () => {
  console.log(pdfMake);
  const { headerDetails } = useContext(headerContext);
  const { objective } = useContext(objectiveContext);
  const { bachelorsData, hsc, sslc, diploma } = useContext(eduContex);
  const { skills } = useContext(skillContex);
  const { projects } = useContext(projectContex);
  const { certificates } = useContext(certifyContex);
  const { activites } = useContext(extraContex);
  const { showB, showD, showHsc, showSslc } = useContext(showEduContex);

  const handleDownload = () => {
    const docDefinition = {
      content: [
        {
          text: `${headerDetails.firstName.toUpperCase()} ${headerDetails.lastName.toUpperCase()}`,
          style: 'header',
          alignment: 'center',
          lineHeight: 1.5
        },
        {
          text: `${headerDetails.jobTitle.toUpperCase()}`,
          style: 'subheader',
          alignment: 'center'
        },
        {
          text: `${headerDetails.phone} | ${headerDetails.email} | ${headerDetails.city} - ${headerDetails.pincode}`,
          style: 'info',
          alignment: 'center'
        },
          {
            text: [
              {
                text: 'GitHub', color: '#3572EF', link: `${headerDetails.github}`,
                style: 'contact',
              },
              { text: ' | ', style: 'info' },
              {
                text: 'LinkedIn', color: '#3572EF', link: `${headerDetails.linkedIn}`,
                style: 'contact',
              }
            ],
            alignment: 'center', 
          },
        {
          text: 'PROFESSIONAL OBJECTIVE',
          style: 'sectionHeader',
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 0,
              x2: 515, 
              y2: 0,
              lineWidth: 2,
              color: '#000000'
            }
          ],
          margin: [0, 3, 0, 3]
        },
        {
          text: objective,
          style: 'normal',
        },
        {
          text: 'EDUCATION',
          style: 'sectionHeader',
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 0,
              x2: 515,  
              y2: 0,
              lineWidth: 2,
              color: '#000000'
            }
          ],
          margin: [0, 3, 0, 3] 
        },
        ...(!showB ? [] : [
          {
            columns: [
              {
                text: `${bachelorsData.college.toUpperCase()}`,
                alignment: 'left',
                width: '*',
                bold: true,
              },
              {
                text: `${bachelorsData.city}`,
                alignment: 'right',
                width: 'auto',
              }
            ],
            style: 'normal',
          },
          {
            columns: [
              {
                text: `${bachelorsData.degree} ${bachelorsData.field} | CGPA: ${bachelorsData.cgpa}`,
                alignment: 'left',
                width: '*',
              },
              {
                text: `(${bachelorsData.from} - ${bachelorsData.to})`,
                alignment: 'right',
                width: 'auto',
              }
            ],
            style: 'normal',
          }
        ]),
        ...(showHsc ? [
          {
            columns: [
              {
                text: `${hsc.hscschool.toUpperCase()}`,
                alignment: 'left',
                width: '*',
                bold: true,
              },
              {
                text:  `${hsc.hsccity}`,
                alignment: 'right',
                width: 'auto',
              }
            ],
            style: 'normal',
          },
          {
            columns: [
              {
                text:  `12th | Percentage: ${hsc.hscprecentage}%`,
                alignment: 'left',
                width: '*',
              },
              {
                text: `(${hsc.hscfrom} - ${hsc.hscto})`,
                alignment: 'right',
                width: 'auto',
              }
            ],
            style: 'normal',
          }
        ] : []),
        ...(showSslc ? [
          {
            columns: [
              {
                text: `${sslc.sslcschool.toUpperCase()}`,
                alignment: 'left',
                width: '*',
                bold: true,
              },
              {
                text: `${sslc.sslccity}`,
                alignment: 'right',
                width: 'auto',
              }
            ],
            style: 'normal',
          },
          {
            columns: [
              {
                text: `10th | Percentage: ${sslc.sslcpercentage}%`,
                alignment: 'left',
                width: '*',
              },
              {
                text: `(${sslc.sslcfrom} - ${sslc.sslcto})`,
                alignment: 'right',
                width: 'auto',
              }
            ],
            style: 'normal',
          }
        ] : []),
        ...(showD ? [
          {
            columns: [
              {
                text: `${diploma.dcollege.toUpperCase()}`,
                alignment: 'left',
                width: '*',
                bold: true,
              },
              {
                text: `${diploma.dcity}`,
                alignment: 'right',
                width: 'auto',
              }
            ],
            style: 'normal',
          },
          {
            columns: [
              {
                text: `${diploma.dfield} | Percentage: ${diploma.dpercentage}%`,
                alignment: 'left',
                width: '*',
              },
              {
                text: `(${diploma.dfrom} - ${diploma.dto})`,
                alignment: 'right',
                width: 'auto',
              }
            ],
            style: 'normal',
          }
        ] : []),,
        {
          text: 'SKILLS',
          style: 'sectionHeader',
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 0,
              x2: 515,
              y2: 0,
              lineWidth: 2,
              color: '#000000'
            }
          ],
          margin: [0, 3, 0, 3]
        },
        {
          text: skills.join(' | '),
          style: 'normal',
        },
        {
          text: 'PROJECTS',
          style: 'sectionHeader',
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 0,
              x2: 515,  
              y2: 0,
              lineWidth: 2,
              color: '#000000'
            }
          ],
          margin: [0, 3, 0, 3] 
        },
        ...projects.map((project, index) => ({
          columns: [
            {
              width: '*',
              stack: [
                {
                  text: [
                    { text: `${index + 1}. ` }, 
                    { text: `${project.name}`, bold: true },
                    { text: ` (${project.type})`},
                  ],
                  margin: [0,0,0, -8],
                },
                {
                  text: [{ text: `\nTechnologies: `,bold: true,},
                    {text: `${project.technologies}\n`},],
                    margin: [10,0,0,0],
                },
                {
                  width: 'auto',
                  ul: [
                    { text: `${project.objective}` }
                  ],
                  margin: [10, 0, 0, 5],
                  style: 'list'
                }
              ],
              style: 'normal',
            },
            {
              width: 'auto',
              text: { text: ` [View Demo]`, link: project.link, color: '#3572EF', alignment: 'right', unbreakable: true,},
              style: 'normal',
            }
          ],
        })),   
        {
          text: 'CERTIFICATIONS',
          style: 'sectionHeader',
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 0,
              x2: 515,  
              y2: 0,
              lineWidth: 2,
              color: '#000000'
            }
          ],
          margin: [0, 3, 0, 3] 
        },
        {
          ul: certificates.map(certificate => ({
            columns: [
              { text: `${certificate.name} – ${certificate.provider}\n`, margin: [0,0,0,5] },
              { text: ` [View Credentials]`, link: certificate.credential, color: '#3572EF', alignment: 'right',},
            ],
          })),
          style: 'normal',
        },
        {
          text: 'EXTRACURRICULAR ACTIVITIES',
          style: 'sectionHeader',
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 0,
              x2: 515,  
              y2: 0,
              lineWidth: 2,
              color: '#000000'
            }
          ],
          margin: [0, 3, 0, 3] 
        },
        {
          ul: activites.map(activity => ({
            text: activity,
            margin: [0, 5, 0, 5], 
            style: 'normal'
          })),
          style: 'list',
          margin: [0, 0, 0, 5]
        },
      ],
      styles: {
        header: { fontSize: 14, bold: true },
        subheader: { fontSize: 12, bold: true },
        info: { fontSize: 12, margin: [0, 5, 0, 5] },
        link: { fontSize: 12, color: '#3572EF' },
        sectionHeader: { fontSize: 12, bold: true, margin: [0, 5, 0, 3] },
        normal: { fontSize: 11, margin: [0, 3, 0, 5], bold: false },
      },
    };

    pdfMake.createPdf(docDefinition).download("Resume.pdf");
  };

  return (
    <>
      <div className="resume-container container-fluid">
        <div className="col-lg-3 col-md-3 col-sm-3"></div>
        <div className="preview col-lg-6 col-md-6 col-sm-6">
          <div className="heading">
            <h3 className="thalaipu">Resume Preview</h3>
          </div>
          <div className="resume" id="resume">
            <div className="header">
              <h4 className="caps">
                {headerDetails.firstName} {headerDetails.lastName}
              </h4>
              <h5 className="caps">{headerDetails.jobTitle}</h5>
              <h6>
                {headerDetails.phone} |{" "}
                <a className="mail link" href={`mailto:${headerDetails.email}`}>
                  {headerDetails.email}
                </a>{" "}
                | {headerDetails.city}
              </h6>
              <h5>
                <a className="mail link" href={headerDetails.github}>
                  GitHub
                </a>{" "}
                |{" "}
                <a className="mail link" href={headerDetails.linkedIn}>
                  LinkedIn
                </a>
              </h5>
            </div>
            <div className="objective">
              <h5>PROFESSIONAL OBJECTIVE</h5>
              <hr className="line" />
              <p className="para">{objective}</p>
            </div>
            <div className="education">
              <h5>EDUCATION</h5>
              <hr className="line" />
              {showB && (
                <>
                  <h6 className="para">{bachelorsData.college}</h6>
                  <h6 className="right">{bachelorsData.city}</h6>
                  <h6>
                    {bachelorsData.degree} | {bachelorsData.field} | CGPA: {bachelorsData.cgpa}
                  </h6>
                  <h6 className="right">
                    ({bachelorsData.from} - {bachelorsData.to})
                  </h6>
                </>
              )}

              {showHsc && (
                <>
                  <h6 className="next">{hsc.hscschool}</h6>
                  <h6 className="right">{hsc.hsccity}</h6>
                  <h6>12th | Percentage: {hsc.hscprecentage}%</h6>
                  <h6 className="right">
                    ({hsc.hscfrom} - {hsc.hscto})
                  </h6>
                </>
              )}
              {showSslc && (
                <>
                  <h6 className="next">{sslc.sslcschool}</h6>
                  <h6 className="right">{sslc.sslccity}</h6>
                  <h6>10th | Percentage: {sslc.sslcpercentage}%</h6>
                  <h6 className="right">
                    ({sslc.sslcfrom} - {sslc.sslcto})
                  </h6>
                </>
              )}
              {showD && (
                <>
                  <h6 className="next">{diploma.dcollege}</h6>
                  <h6 className="right">{diploma.dcity}</h6>
                  <h6>
                    {diploma.dfield} | CGPA: {diploma.dpercentage}
                  </h6>
                  <h6 className="right">
                    ({diploma.dfrom} - {diploma.dto})
                  </h6>
                </>
              )}
            </div>
            <div className="education">
              <h5>SKILLS</h5>
              <hr className="line" />
              <div className="skills">
                {skills.map((skill, index) => (
                  <p key={index} className="para"> {skill} | </p>
                ))}
              </div>
            </div>
            <div className="projects education">
              <h5>PROJECTS</h5>
              <hr className="line" />
              <ol className="probj">
                {projects.map((project, index) => (
                  <li key={index} className="next">
                    <h6 className="para">
                      {project.name} ({project.type})
                    </h6>
                    <a className="right" href={project.link}>
                      View Demo
                    </a>
                    <p className="para">Technologies: {project.technologies}</p>
                    <p className="para">Objective: {project.objective}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="projects education">
              <h5>CERTIFICATIONS</h5>
              <hr className="line" />
              <ul className="probj">
                {certificates.map((certificate, index) => (
                  <li key={index} className="next">
                    <h6 className="para">
                      {certificate.name} – {certificate.provider}
                    </h6>
                    <a className="right" href={certificate.credential}>
                      View Credentials
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="projects education">
              <h5>EXTRACURRICULAR ACTIVITIES</h5>
              <hr className="line" />
              <ul className="probj">
                {activites.map((activity, index) => (
                  <li key={index} className="next">
                    <p className="para">{activity}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            className="btn btn-primary download"
            onClick={handleDownload}
          >
            Download Resume <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Resume;