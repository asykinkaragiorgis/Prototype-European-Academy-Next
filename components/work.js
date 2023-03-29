import React from 'react'

import PropTypes from 'prop-types'

import Link from './link'
import Tag from './tag'

const Work = (props) => {
  return (
    <>
      <div className="work-work">
        <img alt="image" src={props.Image} className="work-image" />
        <div className="work-details">
          <div className="work-header">
            <div className="work-heading">
              <span className="work-text">{props.Title}</span>
              <Link></Link>
            </div>
            <span className="work-text1">{props.Description}</span>
          </div>
          <div className="work-tags">
            <Tag></Tag>
            <Tag Tag="Strategy"></Tag>
            <Tag Tag="Web Development"></Tag>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .work-work {
            gap: 140px;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            border-color: #151515;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            border-bottom-width: 1px;
          }
          .work-image {
            width: 417px;
            height: 520px;
            object-fit: cover;
          }
          .work-details {
            flex: 1;
            height: 520px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .work-header {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .work-heading {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .work-text {
            color: rgb(21, 21, 21);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
            text-transform: uppercase;
          }
          .work-text1 {
            color: rgb(21, 21, 21);
            font-size: 24px;
            line-height: 36px;
          }
          .work-tags {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
          }
          @media (max-width: 991px) {
            .work-work {
              gap: 0px;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: 0;
              padding-right: 0;
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .work-image {
              width: 100%;
            }
            .work-details {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .work-header {
              gap: var(--dl-space-space-unit);
            }
            .work-heading {
              align-items: center;
            }
            .work-text {
              font-size: 24px;
              line-height: 21px;
            }
            .work-text1 {
              font-size: 16px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Work.defaultProps = {
  Image: '/playground_assets/work%20%231-1500w.png',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  Title: 'MOTECH',
}

Work.propTypes = {
  Image: PropTypes.string,
  Description: PropTypes.string,
  Title: PropTypes.string,
}

export default Work
