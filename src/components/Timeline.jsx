import React from 'react';

const Timeline = ({ education, experience }) => {
   
    return (
      <section id="timeline" className="relative px-6 py-7 text-black">
        <div className="container mx-auto max-w-screen-lg">
          <h2 className="text-4xl font-bold mb-8 text-blue-700">Resume</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education && education.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <ul className="space-y-4">
                  {education.map((educationItem, index) => (
                    <li key={index} className="bg-gray-200 p-6 rounded-lg">
                      <div className="border-b border-solid border-black p-5 pr-20 pb-7 inline-block align-top w-full">
                       
                        <span className="font-bold text-base float-left leading-normal">
                          {educationItem.company_name}
                        </span>
                        <br />
                        <span className="font-medium text-base float-left leading-normal mb-2">{educationItem.jobTitle}</span>

                        <label className="m-0 text-xs float-right w-full">
                          {new Date(educationItem.startDate).toLocaleDateString()} -{" "}
                          {new Date(educationItem.endDate).toLocaleDateString()},
                          &nbsp;{educationItem.jobLocation}
                        </label>
                      </div>
                      <div className="px-5 py-5 text-xs">
                        <p className="p-0 font-bold mb-3 mt-3 text-xl">{educationItem.summary}</p>
                        <ul>
                          {educationItem.bulletPoints.map((point, idx) => (
                            <li key={idx} className="text-sm">--{point}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {experience && experience.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <ul className="space-y-4">
                  {experience.map((experienceItem, index) => (
                    <li key={index} className="bg-gray-200 p-6 rounded-lg">
                      <div className="border-b border-solid border-black p-5 pr-20 pb-7 inline-block align-top w-full">
                       
                        <span className="font-bold text-base float-left leading-normal">
                          {experienceItem.company_name}
                        </span>
                        <br />
                        <span className="font-medium text-base float-left leading-normal mb-2">{experienceItem.jobTitle}</span>

                        <label className="m-0 text-xs float-right w-full">
                          {new Date(experienceItem.startDate).toLocaleDateString()} -{" "}
                          {new Date(experienceItem.endDate).toLocaleDateString()},
                          &nbsp;{experienceItem.jobLocation}
                        </label>
                      </div>
                      <div className="px-5 py-5 text-xs">
                        <p className="p-0 font-bold mb-3 mt-3 text-xl">{experienceItem.summary}</p>
                        <ul>
                          {experienceItem.bulletPoints.map((point, idx) => (
                            <li key={idx} className="text-sm">--{point}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    );
};

export default Timeline;
