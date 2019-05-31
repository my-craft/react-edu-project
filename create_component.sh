#!/bin/bash

cd src/components
mkdir $1
cd $1
mkdir component
mkdir container

if [[ $2 == simple ]]; then
cat > index.js << EOF
import $1 from "./component/$1";

export default $1;
EOF
else
cat > index.js << EOF
import $1 from "./container/$1";

export default $1;
EOF
fi

cd component
cat > $1.js << EOF
EOF
cat > $1.module.css << EOF
EOF

if [[ $2 != simple ]]; then
    cd ../container
cat > $1.js << EOF
EOF
fi