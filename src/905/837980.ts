import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { jsx, jsxs } from 'react/jsx-runtime'
import { Uv } from '../905/54385'
import { registerModal } from '../905/102752'
import { hideModal } from '../905/156213'
import { renderI18nText } from '../905/303541'
import { GG } from '../905/511649'
import { Pw } from '../905/521428'
import { DP } from '../905/640017'
import { Point } from '../905/736624'
import { Xj } from '../905/748636'
import { A as _$$A } from '../1617/568132'
import { v as _$$v } from '../figma_app/79979'
import { bV } from '../figma_app/808294'
import { generateRecordingKey } from '../figma_app/878298'

/**
 * Interface for monetized resource metadata
 */
interface MonetizedResourceMetadata {
  id: string
  price: number
  is_subscription: boolean
  trial_length_in_days?: number
  has_freemium_code?: boolean
  can_increase_price?: boolean
  price_updated_at?: string
  annual_discount_percentage?: number
  annual_discount_active_at?: Date
  annual_price?: number
}

/**
 * Interface for plugin information
 */
interface Plugin {
  name: string
  redirect_icon_url?: string
  // Add other plugin properties as needed
}

/**
 * Enum for modal types
 */
export enum ModalType {
  TRIAL_ENDED = 'TRIAL_ENDED',
  PAID_FEATURE = 'PAID_FEATURE',
  SKIP = 'SKIP',
  LOGGED_OUT = 'LOGGED_OUT',
}

/**
 * Interface for modal props
 */
interface FreemiumApiPreCheckoutModalProps {
  type: ModalType
  plugin: Plugin
  monetizedResourceMetadata?: MonetizedResourceMetadata
  onClose?: () => void
  onContinue?: () => void
}

/**
 * Renders the dark theme SVG icon
 * @returns JSX element representing the dark theme icon
 */
function DarkThemeIcon() {
  return jsxs('svg', {
    width: '320',
    height: '148',
    viewBox: '0 0 320 148',
    fill: 'none',
    children: [jsx('path', {
      d: 'M105.245 53.2609C109.179 54.3149 113.469 52.3948 117.046 48.5124C118.203 53.6633 120.959 57.4713 124.892 58.5253C128.826 59.5793 133.116 57.6591 136.693 53.7767C137.85 58.9276 140.605 62.7356 144.539 63.7896C151.667 65.6994 159.964 57.8448 163.072 46.2462C166.179 34.6476 162.921 23.6968 155.794 21.7869C151.86 20.7329 147.57 22.6531 143.993 26.5355C142.836 21.3846 140.08 17.5766 136.147 16.5226C132.213 15.4686 127.923 17.3887 124.346 21.2711C123.189 16.1202 120.434 12.3122 116.5 11.2582C109.372 9.34843 101.075 17.203 97.9674 28.8016C94.8596 40.4002 98.1179 51.3511 105.245 53.2609Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M106.414 15.6906C103.215 18.7189 100.447 23.4104 98.9332 29.0606C97.4192 34.7108 97.4702 40.1575 98.7265 44.3795C99.9882 48.6199 102.401 51.4638 105.504 52.2951C108.927 53.2124 112.858 51.5819 116.311 47.8349L117.604 46.4316L118.022 48.2934C119.138 53.2647 121.728 56.6422 125.151 57.5595C128.574 58.4768 132.505 56.8463 135.958 53.0992L137.251 51.696L137.669 53.5577C138.785 58.529 141.374 61.9065 144.798 62.8238C147.9 63.6552 151.412 62.3989 154.625 59.3575C157.824 56.3293 160.592 51.6378 162.105 45.9875C163.619 40.3373 163.568 34.8906 162.312 30.6686C161.05 26.4282 158.637 23.5843 155.535 22.753C152.111 21.8357 148.18 23.4662 144.728 27.2132L143.435 28.6165L143.017 26.7548C141.9 21.7834 139.311 18.4059 135.888 17.4887C132.464 16.5714 128.534 18.2019 125.081 21.9489L123.788 23.3522L123.37 21.4904C122.253 16.5191 119.664 13.1416 116.241 12.2243C113.138 11.393 109.627 12.6492 106.414 15.6906ZM105.039 14.2382C108.533 10.9301 112.734 9.21397 116.759 10.2925C120.714 11.3523 123.463 14.8264 124.864 19.3361C128.332 16.131 132.45 14.497 136.405 15.5568C140.361 16.6166 143.11 20.0908 144.511 24.6004C147.979 21.3954 152.097 19.7614 156.052 20.8212C160.077 21.8996 162.857 25.4861 164.229 30.0982C165.607 34.7288 165.631 40.5568 164.037 46.5052C162.443 52.4536 159.508 57.4887 156 60.8099C152.505 64.118 148.305 65.8342 144.28 64.7557C140.325 63.6959 137.575 60.2217 136.175 55.7121C132.707 58.9171 128.588 60.5511 124.633 59.4913C120.678 58.4315 117.929 54.9574 116.528 50.4477C113.06 53.6527 108.942 55.2868 104.986 54.227C100.961 53.1485 98.1818 49.562 96.8095 44.9499C95.4317 40.3193 95.4075 34.4913 97.0013 28.5429C98.5952 22.5946 101.53 17.5595 105.039 14.2382Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M205.596 36.6217L200.026 46.2689C199.317 47.4968 197.738 47.9198 196.51 47.2109L162.936 27.8266L157.489 15.2789L171.079 13.7219L204.654 33.1062C205.884 33.8233 206.305 35.3938 205.596 36.6217Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M204.151 33.9709C204.151 33.9706 204.15 33.9703 204.15 33.97L170.865 14.7528L158.943 16.1186L163.721 27.1255L197.01 46.3447C197.76 46.7775 198.727 46.5183 199.159 45.7688L204.729 36.1215C205.161 35.3745 204.908 34.413 204.151 33.9709ZM205.157 32.2422C206.859 33.2345 207.448 35.4134 206.461 37.1215L200.891 46.7688C199.906 48.4749 197.716 49.0618 196.01 48.0768L162.15 28.5274L156.034 14.4388L171.293 12.6907L205.157 32.2422Z',
      fill: '#699BF7',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M198.43 29.5262L190.286 43.6308L188.554 42.6308L196.697 28.5262L198.43 29.5262Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M197 109H116L89.5 39H223L197 109Z',
      fill: '#FFC700',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M88.0522 38H224.438L197.695 110H115.309L88.0522 38ZM90.9479 40L116.691 108H196.305L221.562 40H90.9479Z',
      fill: '#699BF7',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M116 109H118V125H198V127H116V109Z',
      fill: '#699BF7',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M82.3269 24H64V22H83.6731L90.4265 38.6236L88.5735 39.3764L82.3269 24Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M134.389 137.106C134.389 142.968 129.637 147.72 123.775 147.72C117.913 147.72 113.161 142.968 113.161 137.106C113.161 131.245 117.913 126.493 123.775 126.493C129.637 126.493 134.389 131.245 134.389 137.106Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M123.775 145.72C128.532 145.72 132.389 141.864 132.389 137.106C132.389 132.349 128.532 128.493 123.775 128.493C119.018 128.493 115.161 132.349 115.161 137.106C115.161 141.864 119.018 145.72 123.775 145.72ZM123.775 147.72C129.637 147.72 134.389 142.968 134.389 137.106C134.389 131.245 129.637 126.493 123.775 126.493C117.913 126.493 113.161 131.245 113.161 137.106C113.161 142.968 117.913 147.72 123.775 147.72Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M129.081 137.107C129.081 140.038 126.706 142.414 123.775 142.414C120.844 142.414 118.468 140.038 118.468 137.107C118.468 134.176 120.844 131.8 123.775 131.8C126.706 131.8 129.081 134.176 129.081 137.107Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M123.775 140.414C125.601 140.414 127.081 138.933 127.081 137.107C127.081 135.28 125.601 133.8 123.775 133.8C121.948 133.8 120.468 135.28 120.468 137.107C120.468 138.933 121.948 140.414 123.775 140.414ZM123.775 142.414C126.706 142.414 129.081 140.038 129.081 137.107C129.081 134.176 126.706 131.8 123.775 131.8C120.844 131.8 118.468 134.176 118.468 137.107C118.468 140.038 120.844 142.414 123.775 142.414Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M201.166 137.106C201.166 142.968 196.414 147.72 190.552 147.72C184.69 147.72 179.938 142.968 179.938 137.106C179.938 131.245 184.69 126.493 190.552 126.493C196.414 126.493 201.166 131.245 201.166 137.106Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M190.552 145.72C195.309 145.72 199.166 141.864 199.166 137.106C199.166 132.349 195.309 128.493 190.552 128.493C185.795 128.493 181.938 132.349 181.938 137.106C181.938 141.864 185.795 145.72 190.552 145.72ZM190.552 147.72C196.414 147.72 201.166 142.968 201.166 137.106C201.166 131.245 196.414 126.493 190.552 126.493C184.69 126.493 179.938 131.245 179.938 137.106C179.938 142.968 184.69 147.72 190.552 147.72Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M196.081 137.107C196.081 140.038 193.705 142.414 190.774 142.414C187.843 142.414 185.467 140.038 185.467 137.107C185.467 134.176 187.843 131.8 190.774 131.8C193.705 131.8 196.081 134.176 196.081 137.107Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M190.774 140.414C192.6 140.414 194.081 138.933 194.081 137.107C194.081 135.28 192.6 133.8 190.774 133.8C188.947 133.8 187.467 135.28 187.467 137.107C187.467 138.933 188.947 140.414 190.774 140.414ZM190.774 142.414C193.705 142.414 196.081 140.038 196.081 137.107C196.081 134.176 193.705 131.8 190.774 131.8C187.843 131.8 185.467 134.176 185.467 137.107C185.467 140.038 187.843 142.414 190.774 142.414Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M197.5 112C195.567 112 194 110.433 194 108.5C194 106.567 195.567 105 197.5 105C199.433 105 201 106.567 201 108.5C201 110.433 199.433 112 197.5 112Z',
      fill: '#2C2C2C',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M200 108.5C200 107.119 198.881 106 197.5 106C196.119 106 195 107.119 195 108.5C195 109.881 196.119 111 197.5 111C198.881 111 200 109.881 200 108.5ZM197.5 104C199.985 104 202 106.015 202 108.5C202 110.985 199.985 113 197.5 113C195.015 113 193 110.985 193 108.5C193 106.015 195.015 104 197.5 104Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M197.5 129C195.567 129 194 127.433 194 125.5C194 123.567 195.567 122 197.5 122C199.433 122 201 123.567 201 125.5C201 127.433 199.433 129 197.5 129Z',
      fill: '#2C2C2C',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M200 125.5C200 124.119 198.881 123 197.5 123C196.119 123 195 124.119 195 125.5C195 126.881 196.119 128 197.5 128C198.881 128 200 126.881 200 125.5ZM197.5 121C199.985 121 202 123.015 202 125.5C202 127.985 199.985 130 197.5 130C195.015 130 193 127.985 193 125.5C193 123.015 195.015 121 197.5 121Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M117 112C115.067 112 113.5 110.433 113.5 108.5C113.5 106.567 115.067 105 117 105C118.933 105 120.5 106.567 120.5 108.5C120.5 110.433 118.933 112 117 112Z',
      fill: '#2C2C2C',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M119.5 108.5C119.5 107.119 118.381 106 117 106C115.619 106 114.5 107.119 114.5 108.5C114.5 109.881 115.619 111 117 111C118.381 111 119.5 109.881 119.5 108.5ZM117 104C119.485 104 121.5 106.015 121.5 108.5C121.5 110.985 119.485 113 117 113C114.515 113 112.5 110.985 112.5 108.5C112.5 106.015 114.515 104 117 104Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M63.6675 26.5C61.7345 26.5 60.1675 24.933 60.1675 23C60.1675 21.067 61.7345 19.5 63.6675 19.5C65.6005 19.5 67.1675 21.067 67.1675 23C67.1675 24.933 65.6005 26.5 63.6675 26.5Z',
      fill: '#2C2C2C',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M66.1675 23C66.1675 21.6193 65.0482 20.5 63.6675 20.5C62.2868 20.5 61.1675 21.6193 61.1675 23C61.1675 24.3807 62.2868 25.5 63.6675 25.5C65.0482 25.5 66.1675 24.3807 66.1675 23ZM63.6675 18.5C66.1528 18.5 68.1675 20.5147 68.1675 23C68.1675 25.4853 66.1528 27.5 63.6675 27.5C61.1822 27.5 59.1675 25.4853 59.1675 23C59.1675 20.5147 61.1822 18.5 63.6675 18.5Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M83.167 26.5C81.234 26.5 79.667 24.933 79.667 23C79.667 21.067 81.234 19.5 83.167 19.5C85.1 19.5 86.667 21.067 86.667 23C86.667 24.933 85.1 26.5 83.167 26.5Z',
      fill: '#2C2C2C',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M85.667 23C85.667 21.6193 84.5477 20.5 83.167 20.5C81.7863 20.5 80.667 21.6193 80.667 23C80.667 24.3807 81.7863 25.5 83.167 25.5C84.5477 25.5 85.667 24.3807 85.667 23ZM83.167 18.5C85.6523 18.5 87.667 20.5147 87.667 23C87.667 25.4853 85.6523 27.5 83.167 27.5C80.6817 27.5 78.667 25.4853 78.667 23C78.667 20.5147 80.6817 18.5 83.167 18.5Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M117 129C115.067 129 113.5 127.433 113.5 125.5C113.5 123.567 115.067 122 117 122C118.933 122 120.5 123.567 120.5 125.5C120.5 127.433 118.933 129 117 129Z',
      fill: '#2C2C2C',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M119.5 125.5C119.5 124.119 118.381 123 117 123C115.619 123 114.5 124.119 114.5 125.5C114.5 126.881 115.619 128 117 128C118.381 128 119.5 126.881 119.5 125.5ZM117 121C119.485 121 121.5 123.015 121.5 125.5C121.5 127.985 119.485 130 117 130C114.515 130 112.5 127.985 112.5 125.5C112.5 123.015 114.515 121 117 121Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M248.473 31.008L230.542 33.9824L239.835 19.1824L241.71 26.7429L248.473 31.008Z',
      fill: '#FFC700',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M226.485 36.6826L240.644 14.1334L243.457 25.4803L253.987 32.1206L226.485 36.6826ZM241.71 26.7427L239.835 19.1823L230.542 33.9823L248.473 31.0079L241.71 26.7427Z',
      fill: '#699BF7',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M254.785 72.699L189.286 5.69837L190.716 4.30027L256.215 71.3009L254.785 72.699Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M223 42.5C221.067 42.5 219.5 40.933 219.5 39C219.5 37.067 221.067 35.5 223 35.5C224.933 35.5 226.5 37.067 226.5 39C226.5 40.933 224.933 42.5 223 42.5Z',
      fill: '#2C2C2C',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M225.5 39C225.5 37.6193 224.381 36.5 223 36.5C221.619 36.5 220.5 37.6193 220.5 39C220.5 40.3807 221.619 41.5 223 41.5C224.381 41.5 225.5 40.3807 225.5 39ZM223 34.5C225.485 34.5 227.5 36.5147 227.5 39C227.5 41.4853 225.485 43.5 223 43.5C220.515 43.5 218.5 41.4853 218.5 39C218.5 36.5147 220.515 34.5 223 34.5Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M259 75.5L252 75.5L252 68.5L259 68.5L259 75.5Z',
      fill: '#2C2C2C',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M260 76.5L251 76.5L251 67.5L260 67.5L260 76.5ZM258 74.5L258 69.5L253 69.5L253 74.5L258 74.5Z',
      fill: '#699BF7',
    }), jsx('path', {
      d: 'M193 8L186 8L186 0.999999L193 1L193 8Z',
      fill: '#2C2C2C',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M194 9L185 9L185 -2.36282e-07L194 5.36442e-07L194 9ZM192 7L192 2L187 2L187 7L192 7Z',
      fill: '#699BF7',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M218 52H94.5V50H218V52Z',
      fill: '#699BF7',
    })],
  })
}

/**
 * Renders the light theme SVG icon
 * @returns JSX element representing the light theme icon
 */
function LightThemeIcon() {
  return jsxs('svg', {
    width: '320',
    height: '148',
    viewBox: '0 0 320 148',
    fill: 'none',
    children: [jsx('path', {
      d: 'M105.245 53.2609C109.179 54.3149 113.469 52.3948 117.046 48.5124C118.203 53.6633 120.959 57.4713 124.892 58.5253C128.826 59.5793 133.116 57.6591 136.693 53.7767C137.85 58.9276 140.605 62.7356 144.539 63.7896C151.667 65.6994 159.964 57.8448 163.072 46.2462C166.179 34.6476 162.921 23.6968 155.794 21.7869C151.86 20.7329 147.57 22.6531 143.993 26.5355C142.836 21.3846 140.08 17.5766 136.147 16.5226C132.213 15.4686 127.923 17.3887 124.346 21.2711C123.189 16.1202 120.434 12.3122 116.5 11.2582C109.372 9.34843 101.075 17.203 97.9674 28.8016C94.8596 40.4002 98.1179 51.3511 105.245 53.2609Z',
      fill: '#0FA958',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M106.414 15.6906C103.215 18.7189 100.447 23.4104 98.9332 29.0606C97.4192 34.7108 97.4702 40.1575 98.7265 44.3795C99.9882 48.6199 102.401 51.4638 105.504 52.2951C108.927 53.2124 112.858 51.5819 116.311 47.8349L117.604 46.4316L118.022 48.2934C119.138 53.2647 121.728 56.6422 125.151 57.5595C128.574 58.4768 132.505 56.8463 135.958 53.0992L137.251 51.696L137.669 53.5577C138.785 58.529 141.374 61.9065 144.798 62.8238C147.9 63.6552 151.412 62.3989 154.625 59.3575C157.824 56.3293 160.592 51.6378 162.105 45.9875C163.619 40.3373 163.568 34.8906 162.312 30.6686C161.05 26.4282 158.637 23.5843 155.535 22.753C152.111 21.8357 148.18 23.4662 144.728 27.2132L143.435 28.6165L143.017 26.7548C141.9 21.7834 139.311 18.4059 135.888 17.4887C132.464 16.5714 128.534 18.2019 125.081 21.9489L123.788 23.3522L123.37 21.4904C122.253 16.5191 119.664 13.1416 116.241 12.2243C113.138 11.393 109.627 12.6492 106.414 15.6906ZM105.039 14.2382C108.533 10.9301 112.734 9.21397 116.759 10.2925C120.714 11.3523 123.463 14.8264 124.864 19.3361C128.332 16.131 132.45 14.497 136.405 15.5568C140.361 16.6166 143.11 20.0908 144.511 24.6004C147.979 21.3954 152.097 19.7614 156.052 20.8212C160.077 21.8996 162.857 25.4861 164.229 30.0982C165.607 34.7288 165.631 40.5568 164.037 46.5052C162.443 52.4536 159.508 57.4887 156 60.8099C152.505 64.118 148.305 65.8342 144.28 64.7557C140.325 63.6959 137.575 60.2217 136.175 55.7121C132.707 58.9171 128.588 60.5511 124.633 59.4913C120.678 58.4315 117.929 54.9574 116.528 50.4477C113.06 53.6527 108.942 55.2868 104.986 54.227C100.961 53.1485 98.1818 49.562 96.8095 44.9499C95.4317 40.3193 95.4075 34.4913 97.0013 28.5429C98.5952 22.5946 101.53 17.5595 105.039 14.2382Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M205.596 36.6217L200.026 46.2689C199.317 47.4968 197.738 47.9198 196.51 47.2109L162.936 27.8266L157.489 15.2789L171.079 13.7219L204.654 33.1062C205.884 33.8233 206.305 35.3938 205.596 36.6217Z',
      fill: '#699BF7',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M204.151 33.9709C204.151 33.9706 204.15 33.9703 204.15 33.97L170.865 14.7528L158.943 16.1186L163.721 27.1255L197.01 46.3447C197.76 46.7775 198.727 46.5183 199.159 45.7688L204.729 36.1215C205.161 35.3745 204.908 34.413 204.151 33.9709ZM205.157 32.2422C206.859 33.2345 207.448 35.4134 206.461 37.1215L200.891 46.7688C199.906 48.4749 197.716 49.0618 196.01 48.0768L162.15 28.5274L156.034 14.4388L171.293 12.6907L205.157 32.2422Z',
      fill: 'black',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M198.43 29.5262L190.286 43.6308L188.554 42.6308L196.697 28.5262L198.43 29.5262Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M197 109H116L89.5 39H223L197 109Z',
      fill: '#FFC700',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M88.0522 38H224.438L197.695 110H115.309L88.0522 38ZM90.9479 40L116.691 108H196.305L221.562 40H90.9479Z',
      fill: 'black',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M116 109H118V125H198V127H116V109Z',
      fill: 'black',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M82.3269 24H64V22H83.6731L90.4265 38.6236L88.5735 39.3764L82.3269 24Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M134.389 137.106C134.389 142.968 129.637 147.72 123.775 147.72C117.913 147.72 113.161 142.968 113.161 137.106C113.161 131.245 117.913 126.493 123.775 126.493C129.637 126.493 134.389 131.245 134.389 137.106Z',
      fill: '#FFC700',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M123.775 145.72C128.532 145.72 132.389 141.864 132.389 137.106C132.389 132.349 128.532 128.493 123.775 128.493C119.018 128.493 115.161 132.349 115.161 137.106C115.161 141.864 119.018 145.72 123.775 145.72ZM123.775 147.72C129.637 147.72 134.389 142.968 134.389 137.106C134.389 131.245 129.637 126.493 123.775 126.493C117.913 126.493 113.161 131.245 113.161 137.106C113.161 142.968 117.913 147.72 123.775 147.72Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M129.081 137.107C129.081 140.038 126.706 142.414 123.775 142.414C120.844 142.414 118.468 140.038 118.468 137.107C118.468 134.176 120.844 131.8 123.775 131.8C126.706 131.8 129.081 134.176 129.081 137.107Z',
      fill: '#FFC700',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M123.775 140.414C125.601 140.414 127.081 138.933 127.081 137.107C127.081 135.28 125.601 133.8 123.775 133.8C121.948 133.8 120.468 135.28 120.468 137.107C120.468 138.933 121.948 140.414 123.775 140.414ZM123.775 142.414C126.706 142.414 129.081 140.038 129.081 137.107C129.081 134.176 126.706 131.8 123.775 131.8C120.844 131.8 118.468 134.176 118.468 137.107C118.468 140.038 120.844 142.414 123.775 142.414Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M201.166 137.106C201.166 142.968 196.414 147.72 190.552 147.72C184.69 147.72 179.938 142.968 179.938 137.106C179.938 131.245 184.69 126.493 190.552 126.493C196.414 126.493 201.166 131.245 201.166 137.106Z',
      fill: '#FFC700',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M190.552 145.72C195.309 145.72 199.166 141.864 199.166 137.106C199.166 132.349 195.309 128.493 190.552 128.493C185.795 128.493 181.938 132.349 181.938 137.106C181.938 141.864 185.795 145.72 190.552 145.72ZM190.552 147.72C196.414 147.72 201.166 142.968 201.166 137.106C201.166 131.245 196.414 126.493 190.552 126.493C184.69 126.493 179.938 131.245 179.938 137.106C179.938 142.968 184.69 147.72 190.552 147.72Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M196.081 137.107C196.081 140.038 193.705 142.414 190.774 142.414C187.843 142.414 185.467 140.038 185.467 137.107C185.467 134.176 187.843 131.8 190.774 131.8C193.705 131.8 196.081 134.176 196.081 137.107Z',
      fill: '#FFC700',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M190.774 140.414C192.6 140.414 194.081 138.933 194.081 137.107C194.081 135.28 192.6 133.8 190.774 133.8C188.947 133.8 187.467 135.28 187.467 137.107C187.467 138.933 188.947 140.414 190.774 140.414ZM190.774 142.414C193.705 142.414 196.081 140.038 196.081 137.107C196.081 134.176 193.705 131.8 190.774 131.8C187.843 131.8 185.467 134.176 185.467 137.107C185.467 140.038 187.843 142.414 190.774 142.414Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M197.5 112C195.567 112 194 110.433 194 108.5C194 106.567 195.567 105 197.5 105C199.433 105 201 106.567 201 108.5C201 110.433 199.433 112 197.5 112Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M200 108.5C200 107.119 198.881 106 197.5 106C196.119 106 195 107.119 195 108.5C195 109.881 196.119 111 197.5 111C198.881 111 200 109.881 200 108.5ZM197.5 104C199.985 104 202 106.015 202 108.5C202 110.985 199.985 113 197.5 113C195.015 113 193 110.985 193 108.5C193 106.015 195.015 104 197.5 104Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M197.5 129C195.567 129 194 127.433 194 125.5C194 123.567 195.567 122 197.5 122C199.433 122 201 123.567 201 125.5C201 127.433 199.433 129 197.5 129Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M200 125.5C200 124.119 198.881 123 197.5 123C196.119 123 195 124.119 195 125.5C195 126.881 196.119 128 197.5 128C198.881 128 200 126.881 200 125.5ZM197.5 121C199.985 121 202 123.015 202 125.5C202 127.985 199.985 130 197.5 130C195.015 130 193 127.985 193 125.5C193 123.015 195.015 121 197.5 121Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M117 112C115.067 112 113.5 110.433 113.5 108.5C113.5 106.567 115.067 105 117 105C118.933 105 120.5 106.567 120.5 108.5C120.5 110.433 118.933 112 117 112Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M119.5 108.5C119.5 107.119 118.381 106 117 106C115.619 106 114.5 107.119 114.5 108.5C114.5 109.881 115.619 111 117 111C118.381 111 119.5 109.881 119.5 108.5ZM117 104C119.485 104 121.5 106.015 121.5 108.5C121.5 110.985 119.485 113 117 113C114.515 113 112.5 110.985 112.5 108.5C112.5 106.015 114.515 104 117 104Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M63.6675 26.5C61.7345 26.5 60.1675 24.933 60.1675 23C60.1675 21.067 61.7345 19.5 63.6675 19.5C65.6005 19.5 67.1675 21.067 67.1675 23C67.1675 24.933 65.6005 26.5 63.6675 26.5Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M66.1675 23C66.1675 21.6193 65.0482 20.5 63.6675 20.5C62.2868 20.5 61.1675 21.6193 61.1675 23C61.1675 24.3807 62.2868 25.5 63.6675 25.5C65.0482 25.5 66.1675 24.3807 66.1675 23ZM63.6675 18.5C66.1528 18.5 68.1675 20.5147 68.1675 23C68.1675 25.4853 66.1528 27.5 63.6675 27.5C61.1822 27.5 59.1675 25.4853 59.1675 23C59.1675 20.5147 61.1822 18.5 63.6675 18.5Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M83.167 26.5C81.234 26.5 79.667 24.933 79.667 23C79.667 21.067 81.234 19.5 83.167 19.5C85.1 19.5 86.667 21.067 86.667 23C86.667 24.933 85.1 26.5 83.167 26.5Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M85.667 23C85.667 21.6193 84.5477 20.5 83.167 20.5C81.7863 20.5 80.667 21.6193 80.667 23C80.667 24.3807 81.7863 25.5 83.167 25.5C84.5477 25.5 85.667 24.3807 85.667 23ZM83.167 18.5C85.6523 18.5 87.667 20.5147 87.667 23C87.667 25.4853 85.6523 27.5 83.167 27.5C80.6817 27.5 78.667 25.4853 78.667 23C78.667 20.5147 80.6817 18.5 83.167 18.5Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M117 129C115.067 129 113.5 127.433 113.5 125.5C113.5 123.567 115.067 122 117 122C118.933 122 120.5 123.567 120.5 125.5C120.5 127.433 118.933 129 117 129Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M119.5 125.5C119.5 124.119 118.381 123 117 123C115.619 123 114.5 124.119 114.5 125.5C114.5 126.881 115.619 128 117 128C118.381 128 119.5 126.881 119.5 125.5ZM117 121C119.485 121 121.5 123.015 121.5 125.5C121.5 127.985 119.485 130 117 130C114.515 130 112.5 127.985 112.5 125.5C112.5 123.015 114.515 121 117 121Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M248.473 31.008L230.542 33.9824L239.835 19.1824L241.71 26.7429L248.473 31.008Z',
      fill: '#0FA958',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M226.485 36.6826L240.644 14.1334L243.457 25.4803L253.987 32.1206L226.485 36.6826ZM241.71 26.7427L239.835 19.1823L230.542 33.9823L248.473 31.0079L241.71 26.7427Z',
      fill: 'black',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M254.785 72.699L189.286 5.69837L190.716 4.30027L256.215 71.3009L254.785 72.699Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M223 42.5C221.067 42.5 219.5 40.933 219.5 39C219.5 37.067 221.067 35.5 223 35.5C224.933 35.5 226.5 37.067 226.5 39C226.5 40.933 224.933 42.5 223 42.5Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M225.5 39C225.5 37.6193 224.381 36.5 223 36.5C221.619 36.5 220.5 37.6193 220.5 39C220.5 40.3807 221.619 41.5 223 41.5C224.381 41.5 225.5 40.3807 225.5 39ZM223 34.5C225.485 34.5 227.5 36.5147 227.5 39C227.5 41.4853 225.485 43.5 223 43.5C220.515 43.5 218.5 41.4853 218.5 39C218.5 36.5147 220.515 34.5 223 34.5Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M259 75.5L252 75.5L252 68.5L259 68.5L259 75.5Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M260 76.5L251 76.5L251 67.5L260 67.5L260 76.5ZM258 74.5L258 69.5L253 69.5L253 74.5L258 74.5Z',
      fill: 'black',
    }), jsx('path', {
      d: 'M193 8L186 8L186 0.999999L193 1L193 8Z',
      fill: 'white',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M194 9L185 9L185 -2.36282e-07L194 5.36442e-07L194 9ZM192 7L192 2L187 2L187 7L192 7Z',
      fill: 'black',
    }), jsx('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M218 52H94.5V50H218V52Z',
      fill: 'black',
    })],
  })
}

/**
 * Theme icon component that renders either dark or light theme icon based on current theme
 * @returns JSX element representing the appropriate theme icon
 */
function ThemeIcon() {
  const currentTheme = DP()
  const isDarkTheme = currentTheme === 'dark'
  return isDarkTheme ? jsx(DarkThemeIcon, {}) : jsx(LightThemeIcon, {})
}

/**
 * Determines if the user is logged out based on modal type
 * @param modalType - The type of modal being displayed
 * @returns True if the user is logged out, false otherwise
 */
function isLoggedOut(modalType: ModalType): boolean {
  return modalType === ModalType.LOGGED_OUT
}

/**
 * Determines if the user's trial has ended based on modal type
 * @param modalType - The type of modal being displayed
 * @returns True if the trial has ended, false otherwise
 */
function isTrialEnded(modalType: ModalType): boolean {
  return modalType === ModalType.TRIAL_ENDED
}

/**
 * Gets the header text based on modal type
 * @param modalType - The type of modal being displayed
 * @returns Localized header text string
 */
function getHeaderText(modalType: ModalType): string {
  return isTrialEnded(modalType)
    ? renderI18nText('community.buyer.your_trial_has_ended')
    : renderI18nText('community.buyer.unlock_this_feature')
}

/**
 * Gets the secondary text based on modal type and plugin information
 * @param modalType - The type of modal being displayed
 * @param pluginName - The name of the plugin
 * @param isLoggedOut - Whether the user is logged out
 * @param isTrialEnded - Whether the trial has ended
 * @returns Localized secondary text string
 */
function getSecondaryText(
  modalType: ModalType,
  pluginName: string,
  isLoggedOut: boolean,
  isTrialEnded: boolean,
): string {
  if (isLoggedOut) {
    return renderI18nText('community.buyer.log_in_to_get_everything', {
      pluginName,
    })
  }

  if (isTrialEnded) {
    return renderI18nText('community.buyer.you_can_keep_using_plugin', {
      pluginName,
    })
  }

  return renderI18nText('community.buyer.purchase_this_feature_today', {
    pluginName,
  })
}

/**
 * Gets the button text based on monetized resource metadata
 * @param monetizedResourceMetadata - Metadata about the monetized resource
 * @returns JSX element representing the button text
 */
function getButtonText(monetizedResourceMetadata?: MonetizedResourceMetadata) {
  if (monetizedResourceMetadata) {
    return jsxs('div', {
      children: [
        Uv(monetizedResourceMetadata)
          ? renderI18nText('community.buyer.subscribe')
          : renderI18nText('community.buyer.buy'),
        jsx('span', {
          className: 'freemium_api_pre_checkout_modal--buttonPriceString--UHoHb',
          children: bV(monetizedResourceMetadata),
        }),
      ],
    })
  }

  return renderI18nText('community.buyer.buy_now')
}

/**
 * Calculates the initial modal position based on window dimensions
 * @returns Point representing the initial modal position
 */
function calculateInitialModalPosition(): Point {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const modalWidth = 450
  const modalHeight = 442

  const x = (windowWidth - modalWidth) / 2
  const y = (windowHeight - modalHeight) / 2

  return new Point(x, y)
}

/**
 * Freemium API pre-checkout modal component
 * @param props - Component props
 * @returns JSX element representing the modal
 */
export let FreemiumApiPreCheckoutModal = registerModal((props: FreemiumApiPreCheckoutModalProps) => {
  const { onClose, onContinue } = props
  const dispatch = useDispatch()

  const handleClose = useCallback(() => {
    onClose?.()
    dispatch(hideModal())
  }, [dispatch, onClose])

  // Skip modal if type is SKIP
  if (props.type === ModalType.SKIP) {
    onContinue?.()
    return null
  }

  const isUserLoggedOut = isLoggedOut(props.type)
  const isTrialEnded = isTrialEnded(props.type)
  const headerText = getHeaderText(props.type)
  const secondaryText = getSecondaryText(
    props.type,
    props.plugin.name,
    isUserLoggedOut,
    isTrialEnded,
  )
  const buttonText = getButtonText(props.monetizedResourceMetadata)

  const iconUrl = 'redirect_icon_url' in props.plugin
    ? props.plugin.redirect_icon_url
    : undefined

  const initialPosition = calculateInitialModalPosition()

  return jsx(Xj, {
    alwaysEnsureHeaderModalOnScreen: true,
    clickOutsideToHide: true,
    dragHeaderOnly: true,
    frameStyle: {
      overflow: 'hidden',
    },
    ignoreCloseShortcut: true,
    initialPosition,
    onClose: handleClose,
    preventKeyboardFocus: true,
    title: props.plugin.name,
    titleIconSvgClassName: _$$v,
    titleIconSvgSrc: iconUrl ? undefined : _$$A,
    titleIconURL: iconUrl,
    truncateTitleText: true,
    children: jsxs('div', {
      className: 'freemium_api_pre_checkout_modal--contentContainer--pgvJ8',
      children: [
        jsx(ThemeIcon, {}),
        jsx('div', {
          className: 'freemium_api_pre_checkout_modal--headerText--j6MsJ interstitial_modal--headerText--1NkRH',
          children: headerText,
        }),
        jsx('div', {
          className: 'freemium_api_pre_checkout_modal--secondaryText---YTAf interstitial_modal--secondaryText--IC9Gu',
          children: secondaryText,
        }),
        jsx(Pw, {
          onClick: onContinue,
          variant: 'primary',
          children: buttonText,
        }),
        jsx(GG, {
          recordingKey: generateRecordingKey('freemiumApiPreCheckoutModal', 'cancel'),
          onClick: handleClose,
          className: 'freemium_api_pre_checkout_modal--link--SCOub text--fontPos13--xW8hS text--_fontBase--QdLsd',
          children: renderI18nText('community.buyer.maybe_later'),
        }),
      ],
    }),
  })
}, 'FreemiumApiPreCheckoutModal')

export const V = FreemiumApiPreCheckoutModal
export const P = ModalType
