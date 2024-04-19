import React from 'react';
import Slider from 'react-slick';
import { SliderProps } from './SliderProps';

const Testimonial = ({ testimonials }) => {
    return (
        <div id="testimonial" className="mt-8 sm:mt-5 p-6">
            <div className="relative border-b border-gray-300 mb-8">
                <h2 className="inline-block relative align-top text-blue-700 font-semibold text-xl uppercase mb-0 pb-2">What People Say?</h2>
            </div>
            <Slider {...SliderProps.testimonials} id="client-slider-single">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="border border-gray-300 relative bg-white text-black rounded-lg p-5">
                        <div className="relative p-5">
                            <p className='text-lg m-0'>{testimonial.review}</p>
                        </div>
                        <div className="border-t border-gray-300 p-5">
                            <div className="w-24 h-24 inline-block align-middle rounded-full">
                                <img src={testimonial.image.url} alt={testimonial.name} />
                            </div>
                            <div className="text-base p-0 w-full sm:w-auto inline-block align-middle ml-2">
                                <span className='font-medium text-black text-base'>{testimonial.name}</span>
                                <label className='m-0 text-xs block leading-normal'>{testimonial.position}</label>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonial;

