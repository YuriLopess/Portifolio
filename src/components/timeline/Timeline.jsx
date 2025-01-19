import React from 'react'
import './timeline.css'

const Timeline = () => {
  return (
    <section className='timeline section'>
      <h2 className='section__title'>Timeline</h2>
      <span className='section__subtitle'>My personal timeline</span>

      <div className='timeline__container container'>
        <div className='timeline__tabs'>
          <div className="timeline__button timeline__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div className="timeline__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="timeline__sections">
          <div className='timeline__content timeline__content-active'>
            <div className="timeline__data">
              <div>
                <h3 className="timeline__title">Estágio</h3>
                <span className="timeline__subtitle">Fiap</span>
                <div className="timeline__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>

              <div>
                <span className="timeline__rounder"></span>
                <span className="timeline__line"></span>
              </div>
            </div>

            <div className="timeline__data">
              <div></div>
              <div>
                <span className='timeline_rounder'></span>
                <span className='timeline_line'></span>
              </div>
              <div>
                <h3 className="timeline__title">Student</h3>
                <span className="timeline__subtitle">Fiap</span>
                <div className="timeline__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>

              <div>
                <span className="timeline__rounder"></span>
                <div className="timeline__line"></div>
              </div>
            </div>

            <div className="timeline__data">
              <div>
                <h3 className="timeline__title">Estágio</h3>
                <span className="timeline__subtitle">Fiap</span>
                <div className="timeline__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>

              <div>
                <span className="timeline__rounder"></span>
                <span className="timeline__line"></span>
              </div>
            </div>

            <div className="timeline__data">
              <div></div>
              <div>
                <span className='timeline_rounder'></span>
                <span className='timeline_line'></span>
              </div>
              <div>
                <h3 className="timeline__title">Student</h3>
                <span className="timeline__subtitle">Fiap</span>
                <div className="timeline__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>

              <div>
                <span className="timeline__rounder"></span>
                <div className="timeline__line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline