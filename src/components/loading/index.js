import React from 'react';
import { Spinner, LockBody}

export default function Loading ({ src, ...restProps}) {
  return(
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleasBody(){
  return <ReleaseBody
}