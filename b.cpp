#include <iostream>
#include <vector>
using namespace std;

int main() {
  int x = 200;
  float y = 200.790;
  auto f = 33;
  cout << typeid(x).name() << endl;
  cout << typeid(y).name() << endl;
  cout << typeid(f).name() << endl;

    // int a[6] = {3,4,5,6,7,8};
    vector<int> a = {1,2,3,4};


    for(auto i:a){
        cout<<i<<endl;
    }
}