import { useState } from 'react';
import { check, Permission, request, RESULTS } from 'react-native-permissions';

const usePermission = (permission: Permission) => {
  const [allowed, setAllowed] = useState<boolean>(false);

  const checkPermission = async (): Promise<boolean> => {
    try {
      const result = await check(permission);
      if (result === RESULTS.LIMITED || result === RESULTS.GRANTED) {
        setAllowed(true);
        return true;
      } else {
        return requestPermission(permission);
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const requestPermission = async (
    permissionName: Permission,
  ): Promise<boolean> => {
    const result = await request(permissionName);
    if (result === RESULTS.LIMITED || result === RESULTS.GRANTED) {
      setAllowed(true);
      return true;
    } else {
      setAllowed(false);
      return false;
    }
  };

  return { allowed, checkPermission };
};

export default usePermission;
