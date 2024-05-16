import { Header, Loader, RouterOutlet } from '~/libs/components/components.js';
import { DataStatus } from '~/libs/enums/enums.js';
import {
  useAppDispatch,
  useAppSelector,
  useEffect,
} from '~/libs/hooks/hooks.js';
import { actions as authActions } from '~/slices/auth/auth.js';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(({ auth }) => auth.user);
  const dataStatus = useAppSelector(({ auth }) => auth.dataStatus);

  const hasUser = Boolean(user);

  const isLoading = !(
    dataStatus === DataStatus.FULFILLED || dataStatus == DataStatus.REJECTED
  );

  useEffect(() => {
    if (!hasUser) {
      void dispatch(authActions.getCurrentUser());
    }
  }, [hasUser, dispatch]);

  return (
    <>
      <Loader isLoading={isLoading} hasOverlay type="circular">
        <Header user={user} />
        <div>
          <RouterOutlet />
        </div>
      </Loader>
    </>
  );
};

export { App };
