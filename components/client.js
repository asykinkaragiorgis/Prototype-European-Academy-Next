import React from 'react'

import PropTypes from 'prop-types'

const Client = (props) => {
  return (
    <>
      <div className={`client-client ${props.rootClassName} `}>
        <span className="client-text">{props.Quote}</span>
        <div className="client-author">
          <img alt="image" src={props.Avatar} className="client-avatar" />
          <div className="client-details">
            <span className="client-text1">{props.Author}</span>
            <span className="client-text2">{props.Mention}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .client-client {
            gap: var(--dl-space-space-threeunits);
            width: 450px;
            display: flex;
            position: relative;
            border-color: #ffffff;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-bottom-width: 1px;
          }
          .client-text {
            color: #ffffff;
            font-size: 22px;
            line-height: 36px;
          }
          .client-author {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .client-avatar {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .client-details {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .client-text1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
          }
          .client-text2 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            line-height: 30px;
          }

          @media (max-width: 991px) {
            .client-client {
              gap: var(--dl-space-space-unit);
              width: 100%;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .client-text {
              font-size: 16px;
              line-height: 24px;
            }
            .client-author {
              gap: var(--dl-space-space-unit);
            }
            .client-avatar {
              width: 40px;
              height: 40px;
            }
            .client-text1 {
              font-size: 16px;
              line-height: 24px;
            }
            .client-text2 {
              font-size: 16px;
              line-height: 24px;
            }
            .client-root-class-name {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .client-root-class-name1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Client.defaultProps = {
  Mention: '@agncy',
  Quote:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“',
  rootClassName: '',
  Avatar:
    'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&ixlib=rb-4.0.3&w=200',
  Author: 'Joanna Smith',
}

Client.propTypes = {
  Mention: PropTypes.string,
  Quote: PropTypes.string,
  rootClassName: PropTypes.string,
  Avatar: PropTypes.string,
  Author: PropTypes.string,
}

export default Client
