import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { CaretDownFilled } from '@ant-design/icons';
import { Dropdown } from 'antd';

const quoteItems = [
  {
    key: '1',
    label: (
      <a rel='noopener noreferrer' href='/life-insurance'>
        Life Insurance
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a rel='noopener noreferrer' href='/visitor-canada'>
        Visitor to Canada
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a rel='noopener noreferrer' href='/super-visa-insurance'>
        Super visa insurance
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a rel='noopener noreferrer' href='/travel-insurance'>
        Travel Insurance
      </a>
    ),
  },
  {
    key: '5',
    label: (
      <a rel='noopener noreferrer' href='/international-student-insurance'>
        International student insurance
      </a>
    ),
  },
  {
    key: '6',
    label: (
      <a rel='noopener noreferrer' href='/need-analysis-calculator'>
        Need Analysis Calculator
      </a>
    ),
  },
];

const items = [
  {
    key: '1',
    label: 'Life Insurance',
    children: [
      {
        key: '1-1',
        label: (
          <a
            rel='noopener noreferrer'
            href='/life-insurance/term-life-insurance'
          >
            Term Life Insurance
          </a>
        ),
      },
      {
        key: '1-2',
        label: (
          <a
            rel='noopener noreferrer'
            href='/life-insurance/universal-life-insurance'
          >
            Universal Life Insurance
          </a>
        ),
      },
      {
        key: '1-2',
        label: (
          <a
            rel='noopener noreferrer'
            href='/life-insurance/critical-illness-insurance'
          >
            Critical illness insurance
          </a>
        ),
      },
      {
        key: '1-2',
        label: (
          <a
            rel='noopener noreferrer'
            href='/life-insurance/disability-insurance'
          >
            Disability Insurance
          </a>
        ),
      },
    ],
  },
  {
    key: '2',
    label: (
      <a rel='noopener noreferrer' href='/travel-insurance'>
        Travel Insurance
      </a>
    ),
    children: [
      {
        key: '2-1',
        label: (
          <a rel='noopener noreferrer' href='/visitor-canada'>
            Visitor to Canada
          </a>
        ),
      },
      {
        key: '2-2',
        label: (
          <a rel='noopener noreferrer' href='/super-visa-insurance'>
            Super visa insurance
          </a>
        ),
      },
      {
        key: '2-3',
        label: (
          <a rel='noopener noreferrer' href='/travel-insurance'>
            Travel insurance
          </a>
        ),
      },
      {
        key: '2-4',
        label: (
          <a rel='noopener noreferrer' href='international-student-insurance'>
            International students insurance
          </a>
        ),
      },
    ],
  },
  {
    key: '3',
    label: (
      <a rel='noopener noreferrer' href='/auto-insurance'>
        Auto Insurance
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a rel='noopener noreferrer' href='/home-insurance'>
        Home Insurance
      </a>
    ),
  },
  {
    key: '5',
    label: ' Investments',
    children: [
      {
        key: '5-1',
        label: (
          <a rel='noopener noreferrer' href='/investments/rrsp'>
            RRSP
          </a>
        ),
      },
      {
        key: '5-2',
        label: (
          <a rel='noopener noreferrer' href='/investments/tfsa'>
            TFSA
          </a>
        ),
      },
      {
        key: '5-3',
        label: (
          <a rel='noopener noreferrer' href='/investments/resp'>
            RESP
          </a>
        ),
      },
    ],
  },
];

const navigation = [
  { name: 'Home', current: true, href: '/' },
  { name: 'Products', current: false, href: '/' },
  { name: 'Quotes', current: false, href: '/' },
  { name: 'Resources', current: false, href: '/resources' },
  { name: 'About Us', current: false, href: '/about-us' },
  { name: 'Contact', current: false, href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MainNav() {
  return (
    <Disclosure as='nav' className='bg-[#2C5F2D]'>
      {({ open }) => (
        <>
          <div className='mx-auto py-1 xl:px-0 px-5 max-w-7xl '>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center lg:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='hidden lg:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <>
                        {item.name === 'Products' && (
                          <>
                            {console.log(item.name, 'Item')}
                            <Dropdown menu={{ items }}>
                              <div className='flex items-center gap-1  px-3'>
                                <a
                                  key={item.name}
                                  className={classNames(
                                    item.current
                                      ? ' text-white'
                                      : 'text-gray-300  hover:text-white',
                                    'rounded-md py-2 text-sm font-medium cursor-pointer'
                                  )}
                                  aria-current={
                                    item.current ? 'page' : undefined
                                  }
                                >
                                  {item.name}
                                </a>
                                <CaretDownFilled style={{color: "white"}} />
                              </div>
                            </Dropdown>
                          </>
                        )}
                        {item.name === 'Quotes' && (
                          <Dropdown menu={{ items: quoteItems }}>
                            <div className='flex items-center gap-1 px-3'>
                              <a
                                key={item.name}
                                className={classNames(
                                  item.current
                                    ? ' text-white'
                                    : 'text-gray-300  hover:text-white',
                                  'rounded-md py-2 text-sm font-medium cursor-pointer'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                              <CaretDownFilled style={{color: "white"}} />
                            </div>
                          </Dropdown>
                        )}
                        {item.name !== 'Products' && item.name !== 'Quotes' && (
                          <a
                            href={item.href}
                            key={item.name}
                            className={classNames(
                              item.current
                                ? ' text-white'
                                : 'text-gray-300  hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <img src='/images/navbarPhone.png' alt='navbar' />
                <div className='flex flex-col'>
                  <span className='text-sm text-white'>Insurance Advisor</span>
                  <span className='text-sm text-white'>+1 647 469 8766</span>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <>
                  {item.name === 'Products' && (
                    <div className='flex flex-col'>
                      {console.log(item.name, 'Item')}
                      <Dropdown menu={{ items }}>
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? ' text-white'
                              : 'text-gray-300  hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Dropdown>
                    </div>
                  )}
                  {item.name === 'Quotes' && (
                    <Dropdown menu={{ items: quoteItems }}>
                      <a
                        key={item.name}
                        className={classNames(
                          item.current
                            ? ' text-white'
                            : 'text-gray-300  hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    </Dropdown>
                  )}
                  {item.name !== 'Products' && item.name !== 'Quotes' && (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      className={classNames(
                        item.current
                          ? ' text-white'
                          : 'text-gray-300  hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )}
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
