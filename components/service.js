import React from 'react'

import PropTypes from 'prop-types'

const Service = (props) => {
  return (
    <>
      <div className={`service-service ${props.rootClassName} `}>
        <h3 className="service-title">{props.Title}</h3>
        <span className="service-description">{props.Description}</span>
      </div>
      <style jsx>
        {`
          .service-service {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 350px;
            align-items: flex-start;
            border-color: #151515;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            border-bottom-width: 1px;
          }
          .service-title {
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
            white-space: nowrap;
          }
          .service-description {
            font-size: 22px;
            line-height: 36px;
          }

          @media (max-width: 991px) {
            .service-service {
              gap: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .service-title {
              font-size: 18px;
              line-height: 16px;
            }
            .service-description {
              font-size: 14px;
              line-height: 21px;
            }
            .service-root-class-name {
              max-width: 100%;
            }
            .service-root-class-name1 {
              max-width: 100%;
            }
            .service-root-class-name2 {
              max-width: 100%;
            }
            .service-root-class-name3 {
              max-width: 100%;
            }
            .service-root-class-name4 {
              max-width: 100%;
            }
            .service-root-class-name5 {
              max-width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Service.defaultProps = {
  Title: 'Branding',
  rootClassName: '',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Service.propTypes = {
  Title: PropTypes.string,
  rootClassName: PropTypes.string,
  Description: PropTypes.string,
}

export default Service
