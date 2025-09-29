import { props } from '@stylexjs/stylex';
import { jsx, jsxs } from 'react/jsx-runtime';
import { AUTH_SET_ORIGIN, changeAuthFormState } from '../905/194276';
import { renderI18nText } from '../905/303541';
import { Link } from '../905/438674';
import { UserAvatar, AvatarSize } from '../905/590952';
import { ButtonPrimitive } from '../905/632989';
import { SvgComponent } from '../905/714743';
import { AuthFlowStep } from '../905/862321';
import { A } from '../6828/865061';
let m = {
  wrapper: {
    width: 'x168biu4',
    fontFamily: 'x122x9cr',
    $$css: !0
  },
  hintsWrapper: {
    minWidth: 'x18ip3f8',
    padding: 'x1xq1gxn',
    maxWidth: 'x1j9u4d2',
    fontFamily: 'x122x9cr',
    $$css: !0
  },
  header: {
    fontSize: 'xwsyq91',
    lineHeight: 'xcgk4ki',
    width: 'xi55695',
    margin: 'x1tppyt',
    fontWeight: 'xk50ysn',
    textAlign: 'x2b8uid',
    color: 'x1akne3o',
    overflow: 'xb3r6kr',
    textOverflow: 'xlyipyv',
    paddingBottom: 'xwxc41k',
    borderBottom: 'x1n5zjp5',
    $$css: !0
  },
  hintsHeader: {
    margin: 'x1lsv3so',
    $$css: !0
  }
};
/**
 * UserListItemProps type for h (UserListItem) component
 */
interface UserListItemProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
  onUserSelect: (id: string) => void;
  hints?: Record<string, string>;
}

/**
 * Renders a single user item with avatar, name, email, and optional hint.
 * Original function name: h
 */
function UserListItem({
  user,
  onUserSelect,
  hints
}: UserListItemProps) {
  return jsxs(ButtonPrimitive, {
    'aria-label': user.name,
    'className': 'x78zum5 x6s0dn4 x1peatla x1kogg8i x1i0f7ym xt0e3qv xh8yej3 xv2f06h x1ptam9a',
    'onClick': () => onUserSelect(user.id),
    'children': [jsx(UserAvatar, {
      user,
      size: AvatarSize.LARGE
    }), jsxs('div', {
      className: 'xdt5ytf xnm25rq xdpxx8g',
      children: [jsx('div', {
        className: 'x16q51m2 xb3r6kr xlyipyv xuxw1ft x4z9k3i x1o2sk6j xk50ysn',
        children: user.name
      }), jsx('div', {
        className: 'x16q51m2 xb3r6kr xlyipyv xuxw1ft x1j6dyjg x1d3mw78 x1n0bwc9',
        children: user.email
      })]
    }), jsxs('div', {
      className: 'x1iyjqo2 x13a6bvl x78zum5',
      children: [hints && hints[user.id] && jsx('div', {
        className: 'x16q51m2 xb3r6kr xlyipyv xfifm61 x1n0bwc9 x1tudf5h x8x9d4c xeaf4i8 x13faqbe',
        children: hints[user.id]
      }), jsx(SvgComponent, {
        svg: A,
        className: 'xxepmn2 x1akne3o x1ja3g5x'
      })]
    })]
  });
}

/**
 * Props for UserList (formerly $$g0)
 */
export interface UserListProps {
  header: string;
  users: Array<{
    id: string;
    name: string;
    email: string;
  }>;
  onUserSelect: (id: string) => void;
  hints?: Record<string, string>;
  footer?: React.ReactNode;
  trackOnChangeAccount?: () => void;
  onChangeAccount?: () => void;
  authOrigin?: string;
  dispatch: (action: any) => void;
}

/**
 * Renders a list of users with header, hints, and footer.
 * Original function name: $$g0
 */
export function UserAuthList(props: UserListProps) {
  const {
    hints,
    header,
    users,
    onUserSelect,
    footer,
    trackOnChangeAccount,
    onChangeAccount,
    authOrigin,
    dispatch
  } = props;
  const hasHints = hints && Object.keys(hints).length > 0;

  /**
   * Handles the "Add another account" link click.
   */
  const handleAddAccountClick = () => {
    if (trackOnChangeAccount) trackOnChangeAccount();
    if (onChangeAccount) {
      onChangeAccount();
      return;
    }
    if (authOrigin) {
      dispatch(AUTH_SET_ORIGIN({
        authOrigin
      }));
    }
    dispatch(changeAuthFormState({
      formState: AuthFlowStep.SIGN_IN
    }));
  };
  return jsxs('div', {
    ...props(hasHints ? m.hintsWrapper : m.wrapper),
    children: [jsx('div', {
      ...props(m.header, hasHints && m.hintsHeader),
      children: header
    }), jsx('div', {
      className: 'x1xk1jr8 x1xmf6yo',
      children: users.map(user => jsx(UserListItem, {
        onUserSelect,
        hints,
        user
      }, user.id))
    }), jsx('div', {
      className: 'x1dz1jew x1j5rzib x1h4j7j7 xdyg6lv x2b8uid x4z9k3i x1n0bwc9 x1o2sk6j',
      children: footer || renderI18nText('auth.add-another-account-with-link', {
        addAnotherLink: jsx('span', {
          className: 'x1quhyk7 x1ypdohk',
          children: jsx(Link, {
            href: '#',
            onClick: handleAddAccountClick,
            htmlAttributes: {
              'data-testid': 'add-account-button'
            },
            children: renderI18nText('auth.add-another-no-punctuation')
          })
        })
      })
    })]
  });
}

/**
 * Exported alias for UserList (original export: a = $$g0)
 */
export const a = UserAuthList;
export const YJ = UserAuthList; // following import/export refactor instruction
