import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='is-relative' style={{ overflow: 'hidden' }}>
          <img
            className='is-absolute is-top-0 is-left-0 is-hidden-touch column is-5 p-0 is-cover'
            style={{ height: '100%' }}
            src='https://images.unsplash.com/photo-1544717305-2782549b5136?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
            alt=''
          />
          <nav
            className='navbar is-transparent py-5'
            style={{ backgroundColor: 'transparent' }}
          >
            <div className='container is-fluid'>
              <div className='navbar-brand'>
                <a className='navbar-item' href='#'>
                  <span className='navbar-item px-0 title is-5 has-text-dark'>
                    <img
                      src='zeus-assets/logo/logo-zeus-red.svg'
                      alt=''
                      style={{ height: 28 }}
                      width='auto'
                    />
                  </span>
                </a>
                <a
                  className='navbar-menu-open navbar-burger'
                  role='button'
                  type='button'
                  data-toggle='side-menu'
                >
                  <span aria-hidden='true' />
                  <span aria-hidden='true' />
                  <span aria-hidden='true' />
                </a>
              </div>
              <div className='navbar-menu'>
                <div className='navbar-end'>
                  <ul className='navbar-item'>
                    <li>
                      <a className='navbar-item' href='#'>
                        About
                      </a>
                    </li>
                    <li>
                      <a className='navbar-item' href='#'>
                        Company
                      </a>
                    </li>
                    <li>
                      <a className='navbar-item' href='#'>
                        Services
                      </a>
                    </li>
                    <li>
                      <a className='navbar-item' href='#'>
                        Testimonials
                      </a>
                    </li>
                  </ul>
                  <div className='navbar-item is-hidden-mobile pl-0'>
                    <a
                      className='button is-primary has-background-danger-light has-text-danger'
                      href='#'
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className='section'>
            <div className='columns'>
              <div className='column is-12 is-7-desktop ml-auto-desktop'>
                <div className='is-relative pl-8-desktop'>
                  <div className='mb-12 mb-16-desktop'>
                    <div className='has-mw-xl mb-6 mb-12-desktop'>
                      <h2 className='mb-6 mb-12-desktop title is-1 is-size-2-mobile'>
                        Take care of your performance every day.
                      </h2>
                      <p className='has-mw-md has-text-grey-dark'>
                        Build a well-presented brand that everyone will love.
                        Take care to develop resources continually and integrity
                        them with previous projects.
                      </p>
                    </div>
                    <div className='buttons'>
                      <a className='button is-primary' href='#'>
                        Track your performance
                      </a>
                      <a
                        className='button is-outlined is-light has-text-dark'
                        href='#'
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className='columns is-multiline is-mobile'>
                    <div className='column is-6-mobile is-4-tablet is-3-desktop is-2-fullhd py-6 px-6'>
                      <img
                        className='is-block mx-auto'
                        style={{ height: 20 }}
                        src='zeus-assets/logo/slack-gray.svg'
                        alt=''
                      />
                    </div>
                    <div className='column is-6-mobile is-4-tablet is-3-desktop is-2-fullhd py-6 px-6'>
                      <img
                        className='is-block mx-auto'
                        style={{ height: 20 }}
                        src='zeus-assets/logo/dropbox-gray.svg'
                        alt=''
                      />
                    </div>
                    <div className='column is-6-mobile is-4-tablet is-3-desktop is-2-fullhd py-6 px-6'>
                      <img
                        className='is-block mx-auto'
                        style={{ height: 20 }}
                        src='zeus-assets/logo/spotify-gray.svg'
                        alt=''
                      />
                    </div>
                    <div className='column is-6-mobile is-4-tablet is-3-desktop is-2-fullhd py-6 px-6'>
                      <img
                        className='is-block mx-auto'
                        style={{ height: 20 }}
                        src='zeus-assets/logo/stripe-gray.svg'
                        alt=''
                      />
                    </div>
                    <div className='column is-6-mobile is-4-tablet is-3-desktop is-2-fullhd py-6 px-6'>
                      <img
                        className='is-block mx-auto'
                        style={{ height: 20 }}
                        src='zeus-assets/logo/netflix-gray.svg'
                        alt=''
                      />
                    </div>
                  </div>
                  <img
                    className='is-absolute is-right-0 is-bottom-0 mb-32 is-hidden-touch'
                    src='zeus-assets/icons/dots/yellow-dot-right-shield.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className='is-hidden navbar-side is-fixed is-top-0 is-bottom-0 is-left-0 has-mw-md'
            style={{ width: '75%', zIndex: 9999 }}
          >
            <div
              className='navbar-backdrop is-fixed is-inset-0 has-background-dark'
              style={{ opacity: '75%', zIndex: 50 }}
            />
            <aside
              className='menu is-relative is-flex is-flex-direction-column py-6 px-6 has-background-white'
              style={{
                width: '100%',
                height: '100%',
                zIndex: 50,
                overflowY: 'auto',
              }}
            >
              <div className='is-flex is-align-items-center mb-10'>
                <a className='mr-auto mb-0' href='#'>
                  <span className='navbar-item px-0 title is-5 has-text-dark'>
                    <img
                      src='zeus-assets/logo/logo-zeus-red.svg'
                      alt=''
                      style={{ height: 28 }}
                      width='auto'
                    />
                  </span>
                </a>
                <button
                  className='navbar-close button is-text p-0 mb-2'
                  type='button'
                  aria-label='Close'
                >
                  <svg
                    style={{ width: 18, height: 18 }}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <ul className='menu-list is-size-7'>
                <li className='mb-2'>
                  <a href='#'>About</a>
                </li>
                <li className='mb-2'>
                  <a href='#'>Company</a>
                </li>
                <li className='mb-2'>
                  <a href='#'>Services</a>
                </li>
                <li className='mb-2'>
                  <a href='#'>Testimonials</a>
                </li>
              </ul>
              <div className='mt-auto'>
                <div className='py-6'>
                  <a className='button is-primary is-fullwidth' href='#'>
                    Contact Us
                  </a>
                </div>
                <p className='mb-4 has-text-centered has-text-grey-dark'>
                  <span>© 2021 All rights reserved.</span>
                </p>
              </div>
            </aside>
          </div>
        </section>
        <section className='section py-20'>
          <div className='container'>
            <div className='columns is-vcentered'>
              <div className='column is-6 mb-8 mb-0-desktop'>
                <div className='has-mw-lg'>
                  <h2 className='mb-6 mb-10-desktop title is-2'>
                    Expand your brand
                  </h2>
                  <p className='mb-6 mb-10-desktop is-size-5 has-text-grey-dark'>
                    If you have ever wondered how to develop your brand, this is
                    the place for you. Take a big step forward in growing your
                    business with this great tool.
                  </p>
                  <div className='box p-0 mb-10'>
                    <div
                      className='is-flex p-4'
                      style={{ borderBottom: '1px solid #DADFE9' }}
                    >
                      <svg
                        className='mr-4 mt-1'
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z'
                          fill='#45C1FF'
                        />
                      </svg>
                      <p className='has-text-weight-semibold mb-0'>
                        Quick problem-solving contact
                      </p>
                    </div>
                    <div
                      className='is-flex p-4'
                      style={{ borderBottom: '1px solid #DADFE9' }}
                    >
                      <svg
                        className='mr-4 mt-1'
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z'
                          fill='#45C1FF'
                        />
                      </svg>
                      <p className='has-text-weight-semibold mb-0'>
                        Making changes simple and easy
                      </p>
                    </div>
                    <div
                      className='is-flex p-4'
                      style={{ borderBottom: '1px solid #DADFE9' }}
                    >
                      <svg
                        className='mr-4 mt-1'
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z'
                          fill='#45C1FF'
                        />
                      </svg>
                      <p className='has-text-weight-semibold mb-0'>
                        Exchangeable at any time
                      </p>
                    </div>
                  </div>
                  <a className='button is-primary' href='#'>
                    Activate Demo
                  </a>
                </div>
              </div>
              <div className='is-relative column is-6'>
                <img
                  className='image is-fullwidth is-cover is-rounded'
                  style={{ maxHeight: 512 }}
                  src='https://images.unsplash.com/photo-1544717305-996b815c338c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
                  alt=''
                />
                <img
                  className='is-absolute is-bottom-0 is-right-0 mb-64 -mr-24 is-hidden-mobile'
                  src='zeus-assets/icons/dots/red-dot-right-shield.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>
        <section className='is-relative py-20'>
          <div className='section py-0'>
            <div className='container mb-10 mb-0-desktop'>
              <div className='columns'>
                <div className='column is-6-desktop ml-auto'>
                  <div className='has-mw-lg mb-8 mb-12-desktop'>
                    <h2 className='mb-10 title is-2'>Get questions?</h2>
                    <p className='is-size-5 has-text-grey-dark'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque massa nibh, pulvinar vitae aliquet nec,
                      accumsan aliquet orci.
                    </p>
                  </div>
                  <div className='columns has-mw-xl'>
                    <div className='column is-6 mb-12 mb-0-desktop'>
                      <span className='is-inline-block mb-4 mb-8-desktop'>
                        <svg
                          width={48}
                          height={48}
                          viewBox='0 0 48 48'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            x='0.5'
                            y='0.5'
                            width={47}
                            height={47}
                            rx='23.5'
                            fill='white'
                            stroke='#DEE4E9'
                          />
                          <g clipPath='url(#clip0)'>
                            <path
                              d='M28.875 26.375C29.1071 26.6069 29.4219 26.7372 29.75 26.7372C30.0781 26.7372 30.3929 26.6069 30.625 26.375C30.8569 26.1429 30.9872 25.8281 30.9872 25.5C30.9872 25.1719 30.8569 24.8571 30.625 24.625L26 20'
                              stroke='#838EA4'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M16.5 22.5V17.5H21.55C21.7005 17.5001 21.8508 17.5098 22 17.529'
                              stroke='#838EA4'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M27.5 25L29.013 26.513C29.2449 26.7451 29.3752 27.0599 29.3752 27.388C29.3752 27.7161 29.2449 28.0309 29.013 28.263V28.263C28.7808 28.4949 28.4661 28.6252 28.138 28.6252C27.8098 28.6252 27.4951 28.4949 27.263 28.263L25.736 26.736'
                              stroke='#838EA4'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M26.875 27.875C27.1069 28.1071 27.2372 28.4219 27.2372 28.75C27.2372 29.0781 27.1069 29.3929 26.875 29.625V29.625'
                              stroke='#838EA4'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M26 20L22.551 22.587C22.3854 22.7111 22.1885 22.7866 21.9824 22.8051C21.7763 22.8237 21.5691 22.7845 21.384 22.692V22.692C21.2259 22.613 21.0889 22.4976 20.9842 22.3552C20.8795 22.2129 20.8101 22.0477 20.7817 21.8733C20.7534 21.6988 20.767 21.5201 20.8213 21.352C20.8756 21.1838 20.9691 21.0309 21.094 20.906L24.153 18.239C24.6992 17.7627 25.3993 17.5002 26.124 17.5H31.5V22.5'
                              stroke='#838EA4'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M17.875 24.1254L17.6247 24.3757C17.1416 24.8588 17.1416 25.642 17.6247 26.1251L17.6254 26.1258C18.1085 26.6088 18.8917 26.6088 19.3748 26.1258L19.6251 25.8754C20.1082 25.3924 20.1082 24.6091 19.6251 24.1261L19.6244 24.1254C19.1413 23.6423 18.3581 23.6423 17.875 24.1254Z'
                              stroke='#838EA4'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M19.6951 25.8061L19.3069 26.1943C18.8239 26.6774 18.8239 27.4606 19.3069 27.9437L19.3076 27.9444C19.7907 28.4274 20.574 28.4274 21.057 27.9444L21.4452 27.5562C21.9283 27.0731 21.9283 26.2899 21.4452 25.8068L21.4445 25.8061C20.9614 25.323 20.1782 25.323 19.6951 25.8061Z'
                              stroke='#838EA4'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M21.307 27.6929L21.0567 27.9432C20.5736 28.4263 20.5736 29.2095 21.0567 29.6926L21.0574 29.6933C21.5405 30.1763 22.3237 30.1763 22.8068 29.6933L23.0571 29.443C23.5402 28.9599 23.5402 28.1766 23.0571 27.6936L23.0564 27.6929C22.5733 27.2098 21.7901 27.2098 21.307 27.6929Z'
                              stroke='#838EA4'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M23.0769 29.4235L22.8174 29.683C22.403 30.0973 22.4029 30.769 22.817 31.1831C23.2312 31.5973 23.9028 31.5971 24.3172 31.1828L24.5767 30.9233C24.991 30.5089 24.9912 29.8373 24.577 29.4231C24.1629 29.009 23.4912 29.0091 23.0769 29.4235Z'
                              stroke='#838EA4'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0'>
                              <rect
                                width={16}
                                height={16}
                                fill='white'
                                transform='translate(16 16)'
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p className='mb-4 is-size-4 has-text-weight-semibold'>
                        Visit Us
                      </p>
                      <p className='has-text-grey-dark'>1686, Geraldine Lane</p>
                      <p className='has-text-grey-dark'>New York, NY 10013</p>
                    </div>
                    <div className='column is-6 mb-12 mb-0-desktop'>
                      <span className='is-inline-block mb-4 mb-8-desktop'>
                        <svg
                          width={48}
                          height={48}
                          viewBox='0 0 48 48'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            x='0.5'
                            y='0.5'
                            width={47}
                            height={47}
                            rx='23.5'
                            fill='white'
                            stroke='#DEE4E9'
                          />
                          <path
                            d='M26.514 25.764L25.292 27.292C23.3984 26.1794 21.8205 24.6015 20.708 22.708L22.236 21.486C22.4151 21.3426 22.5417 21.144 22.5959 20.9211C22.6502 20.6982 22.6291 20.4636 22.536 20.254L21.143 17.117C21.0431 16.8922 20.8666 16.7101 20.645 16.6034C20.4234 16.4966 20.171 16.472 19.933 16.534L17.281 17.221C17.0336 17.2858 16.8186 17.439 16.6765 17.6517C16.5344 17.8643 16.4752 18.1216 16.51 18.375C16.9753 21.6887 18.5067 24.7609 20.8729 27.127C23.239 29.4932 26.3112 31.0247 29.625 31.49C29.8782 31.5249 30.1355 31.4657 30.348 31.3236C30.5605 31.1815 30.7135 30.9664 30.778 30.719L31.466 28.068C31.5279 27.8299 31.5033 27.5776 31.3965 27.356C31.2898 27.1343 31.1078 26.9579 30.883 26.858L27.746 25.465C27.5364 25.372 27.3019 25.351 27.0791 25.405C26.8563 25.4591 26.6576 25.5853 26.514 25.764V25.764Z'
                            stroke='#838EA4'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </span>
                      <p className='mb-4 is-size-4 has-text-weight-semibold'>
                        Contact Us
                      </p>
                      <p className='has-text-grey-dark'>hello@wireframes.org</p>
                      <p className='has-text-grey-dark'>+ 7-843-672-431</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='is-absolute is-left-0 is-top-0 mt-20 is-hidden-touch is-block'>
              <img
                className='column is-6 p-0 is-cover'
                style={{ height: 448, borderRadius: '0 8px 8px 0' }}
                src='zeus-assets/images/map1.png'
                alt=''
              />
            </div>
          </div>
          <div className='is-hidden-desktop'>
            <img
              className='image is-fullwidth is-cover'
              style={{ height: 448 }}
              src='zeus-assets/images/map1.png'
              alt=''
            />
          </div>
        </section>
        <section className='section py-20'>
          <div className='container'>
            <div className='has-mw-2xl mx-auto mb-16 has-text-centered'>
              <span className='is-size-7'>
                <small className='has-text-info has-text-weight-semibold'>
                  What's new at Shuffle
                </small>
              </span>
              <h2 className='mt-8 mb-10 title is-2'>
                Lorem ipsum dolor sit amet consectutar domor at elis
              </h2>
              <p className='is-size-5 has-text-grey-dark'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                aliquet orci.
              </p>
            </div>
            <div className='columns is-multiline -mb-4'>
              <div className='column is-4-tablet is-2-desktop p-4'>
                <div className='py-4'>
                  <img
                    className='is-block mx-auto'
                    style={{ height: 24 }}
                    src='zeus-assets/logo/slack-gray.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='column is-4-tablet is-2-desktop p-4'>
                <div className='py-4'>
                  <img
                    className='is-block mx-auto'
                    style={{ height: 24 }}
                    src='zeus-assets/logo/dropbox-gray.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='column is-4-tablet is-2-desktop p-4'>
                <div className='py-4'>
                  <img
                    className='is-block mx-auto'
                    style={{ height: 24 }}
                    src='zeus-assets/logo/spotify-gray.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='column is-4-tablet is-2-desktop p-4'>
                <div className='py-4'>
                  <img
                    className='is-block mx-auto'
                    style={{ height: 24 }}
                    src='zeus-assets/logo/amazon-gray.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='column is-4-tablet is-2-desktop p-4'>
                <div className='py-4'>
                  <img
                    className='is-block mx-auto'
                    style={{ height: 24 }}
                    src='zeus-assets/logo/netflix-gray.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='column is-4-tablet is-2-desktop p-4'>
                <div className='py-4'>
                  <img
                    className='is-block mx-auto'
                    style={{ height: 24 }}
                    src='zeus-assets/logo/stripe-gray.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='is-relative section py-20'>
          <img
            className='is-absolute is-left-0 is-top-0 mt-16 is-hidden-mobile'
            src='zeus-assets/icons/dots/blue-dot-left-bars.svg'
            alt=''
          />
          <img
            className='is-absolute is-right-0 is-bottom-0 mb-16 is-hidden-mobile'
            src='zeus-assets/icons/dots/yellow-dot-right-shield.svg'
            alt=''
          />
          <div className='container has-text-centered'>
            <span
              className='is-flex is-align-items-center is-justify-content-center mx-auto mb-10 has-background-danger'
              style={{ width: 64, height: 64, borderRadius: '100%' }}
            >
              <svg
                width={22}
                height={20}
                viewBox='0 0 22 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.9024 6.85107L12.4591 10.4641C11.6196 11.1301 10.4384 11.1301 9.59895 10.4641L5.11816 6.85107'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>
            <div className='has-mw-2xl mx-auto'>
              <span className='is-size-7'>
                <small className='has-text-info has-text-weight-semibold'>
                  What's new at Shuffle
                </small>
              </span>
              <h2 className='mt-10 mb-10 title is-2'>
                Lorem ipsum dolor sit amet consectutar domor at elis
              </h2>
              <p className='mb-16 is-size-5 has-text-grey-dark'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                aliquet orci.
              </p>
              <form action='#'>
                <div className='columns is-centered'>
                  <div className='column is-4'>
                    <div className='is-relative'>
                      <input
                        className='input py-6'
                        type='text'
                        placeholder='e.g hello@shuffle.dev'
                      />
                      <span
                        className='is-absolute is-top-0 is-left-0 -mt-2 ml-3 px-1 has-background-white has-text-grey-dark'
                        style={{ fontSize: 12 }}
                      >
                        Your email address
                      </span>
                    </div>
                  </div>
                  <div className='column is-4'>
                    <div className='is-relative'>
                      <input
                        className='input py-6'
                        type='text'
                        placeholder='(406) 555-0120'
                      />
                      <span
                        className='is-absolute is-top-0 is-left-0 -mt-2 ml-3 px-1 has-background-white has-text-grey-dark'
                        style={{ fontSize: 12 }}
                      >
                        Phone Number
                      </span>
                    </div>
                  </div>
                  <div className='column is-3'>
                    <button className='button is-primary px-5 is-fullwidth'>
                      Sign&nbsp;up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className='is-relative section py-20'>
          <img
            className='is-absolute is-left-0 is-top-0 mt-24 is-hidden-touch'
            src='zeus-assets/icons/dots/blue-dot-left-bars.svg'
            alt=''
          />
          <img
            className='is-absolute is-right-0 is-top-0 mt-52 is-hidden-touch'
            src='zeus-assets/icons/dots/yellow-dot-right-shield.svg'
            alt=''
          />
          <div className='container'>
            <div className='has-mw-2xl mx-auto mb-20 has-text-centered'>
              <span className='is-size-7'>
                <small className='has-text-info has-text-weight-semibold'>
                  What's new at Shuffle
                </small>
              </span>
              <h2 className='mt-8 mb-10 title is-2'>
                Lorem ipsum dolor sit amet consectutar domor at elis
              </h2>
              <p className='is-size-5 has-text-grey-dark'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                aliquet orci.
              </p>
            </div>
            <div className='columns is-multiline -mb-16'>
              <div className='column is-6 mb-16'>
                <div className='columns'>
                  <div className='column is-4 mb-6 mb-0-desktop'>
                    <div style={{ height: '10rem' }}>
                      <img
                        className='image is-fullwidth is-cover is-rounded'
                        style={{ height: '100%' }}
                        src='https://images.unsplash.com/photo-1544717305-996b815c338c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='column is-8'>
                    <span className='is-inline-block mb-4 has-text-grey-dark'>
                      10 Jun 2021 19:40
                    </span>
                    <h2 className='mb-4 title is-3'>Lorem ipsum dolor sit</h2>
                    <p className='mb-4 has-text-grey-dark'>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                    <a className='is-size-6' href='#'>
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className='column is-6 mb-16'>
                <div className='columns'>
                  <div className='column is-4'>
                    <div style={{ height: '10rem' }}>
                      <img
                        className='image is-fullwidth is-cover is-rounded'
                        style={{ objectPosition: 'top', height: '100%' }}
                        src='https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='column is-8'>
                    <span className='is-inline-block mb-4 has-text-grey-dark'>
                      10 Jun 2021 19:40
                    </span>
                    <h2 className='mb-4 title is-3'>Lorem ipsum dolor sit</h2>
                    <p className='mb-4 has-text-grey-dark'>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                    <a className='is-size-6' href='#'>
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className='column is-6 mb-16'>
                <div className='columns'>
                  <div className='column is-4'>
                    <div style={{ height: '10rem' }}>
                      <img
                        className='image is-fullwidth is-cover is-rounded'
                        style={{ objectPosition: 'top', height: '100%' }}
                        src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='column is-8'>
                    <span className='is-inline-block mb-4 has-text-grey-dark'>
                      10 Jun 2021 19:40
                    </span>
                    <h2 className='mb-4 title is-3'>Lorem ipsum dolor sit</h2>
                    <p className='mb-4 has-text-grey-dark'>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                    <a className='is-size-6' href='#'>
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className='column is-6 mb-16'>
                <div className='columns'>
                  <div className='column is-4'>
                    <div style={{ height: '10rem' }}>
                      <img
                        className='image is-fullwidth is-cover is-rounded'
                        style={{ objectPosition: 'top', height: '100%' }}
                        src='https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='column is-8'>
                    <span className='is-inline-block mb-4 has-text-grey-dark'>
                      10 Jun 2021 19:40
                    </span>
                    <h2 className='mb-4 title is-3'>Lorem ipsum dolor sit</h2>
                    <p className='mb-4 has-text-grey-dark'>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                    <a className='is-size-6' href='#'>
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className='column is-6 mb-16'>
                <div className='columns'>
                  <div className='column is-4'>
                    <div style={{ height: '10rem' }}>
                      <img
                        className='image is-fullwidth is-cover is-rounded'
                        style={{ objectPosition: 'top', height: '100%' }}
                        src='https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='column is-8'>
                    <span className='is-inline-block mb-4 has-text-grey-dark'>
                      10 Jun 2021 19:40
                    </span>
                    <h2 className='mb-4 title is-3'>Lorem ipsum dolor sit</h2>
                    <p className='mb-4 has-text-grey-dark'>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                    <a className='is-size-6' href='#'>
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className='column is-6'>
                <div className='columns'>
                  <div className='column is-4'>
                    <div style={{ height: '10rem' }}>
                      <img
                        className='image is-fullwidth is-cover is-rounded'
                        style={{
                          objectPosition: 'top',
                          height: '100%',
                          width: '100%',
                        }}
                        src='https://images.unsplash.com/photo-1525129498994-580709352e20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='column is-8'>
                    <span className='is-inline-block mb-4 has-text-grey-dark'>
                      10 Jun 2021 19:40
                    </span>
                    <h2 className='mb-4 title is-3'>Lorem ipsum dolor sit</h2>
                    <p className='mb-4 has-text-grey-dark'>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </p>
                    <a className='is-size-6' href='#'>
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section py-10 py-lg-20'>
          <div className='container'>
            <div
              className='columns mb-8 pb-8'
              style={{ borderBottom: '1px solid #DADFE9' }}
            >
              <div className='column is-8'>
                <div className='columns'>
                  <div className='column is-3 mb-2'>
                    <h3 className='mb-6 title is-7'>Company</h3>
                    <ul>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          About Us
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Careers
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Press
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='column is-3 mb-4'>
                    <h3 className='mb-6 title is-7'>Pages</h3>
                    <ul>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Login
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Register
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Add list
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='column is-3 mb-4'>
                    <h3 className='mb-6 title is-7'>Legal</h3>
                    <ul>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Terms
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          About Us
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Team
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Privacy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='column is-3 mb-4'>
                    <h3 className='mb-6 title is-7'>Resources</h3>
                    <ul>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Blog
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Service
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Product
                        </a>
                      </li>
                      <li className='mb-4'>
                        <a className='has-text-grey-dark' href='#'>
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='column is-4 mb-12 mb-0-desktop'>
                <h3 className='mb-6 title is-7'>Subscribe</h3>
                <p className='mb-12 has-text-grey-dark'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <form action='#'>
                  <div className='columns is-vcentered'>
                    <div className='column is-8 mb-4 mb-0-desktop'>
                      <div className='is-relative'>
                        <input
                          className='input py-6'
                          type='text'
                          placeholder='e.g hello@shuffle.dev'
                        />
                        <span
                          className='is-absolute is-top-0 is-left-0 -mt-2 ml-3 px-1 has-background-white has-text-grey-dark'
                          style={{ fontSize: 12 }}
                        >
                          Your email address
                        </span>
                      </div>
                    </div>
                    <div className='column is-4'>
                      <button className='button is-primary'>Subscribe</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='columns is-vcentered is-multiline'>
              <div className='column is-6'>
                <a
                  className='is-inline-block mb-6 title is-5 has-text-dark'
                  href='#'
                >
                  <img
                    src='zeus-assets/logo/logo-zeus-red.svg'
                    alt=''
                    style={{ height: 28 }}
                    width='auto'
                  />
                </a>
                <p className='is-hidden-touch has-text-grey-dark'>
                  All rights reserved © Zeus Corporation 2021
                </p>
              </div>
              <div className='column is-6'>
                <div className='is-flex mb-6 mb-0-desktop'>
                  <a
                    className='ml-auto-tablet is-flex is-justify-content-center is-align-items-center mr-4 has-background-light'
                    href='#'
                    style={{ width: 40, height: 40, borderRadius: '100%' }}
                  >
                    <svg
                      className='has-text-grey-dark'
                      width={7}
                      height={12}
                      viewBox='0 0 7 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M4.0898 11.8182V6.51068H5.90537L6.17776 4.44164H4.0898V3.12086C4.0898 2.52201 4.25864 2.1139 5.13515 2.1139L6.25125 2.11345V0.26283C6.05824 0.238228 5.39569 0.181824 4.62456 0.181824C3.01431 0.181824 1.9119 1.14588 1.9119 2.91594V4.44164H0.0908203V6.51068H1.9119V11.8182H4.0898Z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                  <a
                    className='is-flex is-justify-content-center is-align-items-center mr-4 has-background-light'
                    href='#'
                    style={{ width: 40, height: 40, borderRadius: '100%' }}
                  >
                    <svg
                      className='has-text-grey-dark'
                      width={13}
                      height={11}
                      viewBox='0 0 13 11'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M12.5455 2.09728C12.0904 2.29892 11.6022 2.43566 11.0892 2.49671C11.613 2.18304 12.014 1.6855 12.204 1.09447C11.7127 1.38496 11.1703 1.59589 10.5924 1.71023C10.1296 1.21655 9.47138 0.909058 8.74128 0.909058C7.34059 0.909058 6.20489 2.04475 6.20489 3.44467C6.20489 3.64322 6.2273 3.83714 6.27057 4.02257C4.16298 3.91671 2.29411 2.90696 1.0433 1.37259C0.824652 1.74653 0.700269 2.18225 0.700269 2.64736C0.700269 3.52734 1.14837 4.30379 1.82825 4.75805C1.41259 4.74415 1.02166 4.62981 0.67942 4.43975V4.47142C0.67942 5.69983 1.55399 6.72504 2.71362 6.95837C2.50116 7.01554 2.27712 7.04722 2.04534 7.04722C1.88156 7.04722 1.72318 7.031 1.56788 7.00009C1.89081 8.00831 2.8272 8.74148 3.93663 8.76158C3.06902 9.44146 1.97504 9.84552 0.786814 9.84552C0.582087 9.84552 0.38043 9.83316 0.181885 9.81076C1.30445 10.5316 2.63716 10.9519 4.06952 10.9519C8.73514 10.9519 11.2854 7.0874 11.2854 3.73595L11.2769 3.4076C11.7752 3.05219 12.2063 2.60564 12.5455 2.09728Z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                  <a
                    className='is-flex is-justify-content-center is-align-items-center mr-4 has-background-light'
                    href='#'
                    style={{ width: 40, height: 40, borderRadius: '100%' }}
                  >
                    <svg
                      className='has-text-grey-dark'
                      width={14}
                      height={14}
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M4.06713 0.454529H9.9328C11.9249 0.454529 13.5456 2.07519 13.5455 4.06715V9.93282C13.5455 11.9248 11.9249 13.5454 9.9328 13.5454H4.06713C2.07518 13.5454 0.45459 11.9249 0.45459 9.93282V4.06715C0.45459 2.07519 2.07518 0.454529 4.06713 0.454529ZM9.9329 12.3839C11.2845 12.3839 12.3841 11.2844 12.3841 9.93282H12.384V4.06714C12.384 2.71563 11.2844 1.61601 9.93282 1.61601H4.06715C2.71564 1.61601 1.61609 2.71563 1.61609 4.06714V9.93282C1.61609 11.2844 2.71564 12.384 4.06715 12.3839H9.9329ZM3.57148 7.00005C3.57148 5.10947 5.10951 3.5714 7.00005 3.5714C8.8906 3.5714 10.4286 5.10947 10.4286 7.00005C10.4286 8.89056 8.8906 10.4285 7.00005 10.4285C5.10951 10.4285 3.57148 8.89056 3.57148 7.00005ZM4.75203 6.99998C4.75203 8.23951 5.76054 9.24788 7.00004 9.24788C8.23955 9.24788 9.24806 8.23951 9.24806 6.99998C9.24806 5.76036 8.23963 4.75191 7.00004 4.75191C5.76046 4.75191 4.75203 5.76036 4.75203 6.99998Z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                  <a
                    className='is-flex is-justify-content-center is-align-items-center mr-4 has-background-light'
                    href='#'
                    style={{ width: 40, height: 40, borderRadius: '100%' }}
                  >
                    <svg
                      className='has-text-grey-dark'
                      width={12}
                      height={12}
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10.8 0H1.2C0.54 0 0 0.54 0 1.2V10.8C0 11.46 0.54 12 1.2 12H10.8C11.46 12 12 11.46 12 10.8V1.2C12 0.54 11.46 0 10.8 0ZM3.6 10.2H1.8V4.8H3.6V10.2ZM2.7 3.78C2.1 3.78 1.62 3.3 1.62 2.7C1.62 2.1 2.1 1.62 2.7 1.62C3.3 1.62 3.78 2.1 3.78 2.7C3.78 3.3 3.3 3.78 2.7 3.78ZM10.2 10.2H8.4V7.02C8.4 6.54002 7.98 6.12 7.5 6.12C7.02 6.12 6.6 6.54002 6.6 7.02V10.2H4.8V4.8H6.6V5.52C6.9 5.04 7.56 4.68 8.1 4.68C9.24 4.68 10.2 5.64 10.2 6.78V10.2Z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <p className='is-hidden-desktop has-text-grey-dark'>
                All rights reserved © Zeus Corporation 2021
              </p>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

