#!/bin/bash

cd src/components
mkdir $1
cd $1
mkdir component
mkdir container

cat > index.js << EOF
import $1 from "./container/$1";

export default $1;
EOF

cd component
cat > $1.js << EOF
EOF
cat > $1.module.css << EOF
EOF

cd ../container
cat > $1.js << EOF
EOF