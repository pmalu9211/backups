#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int jump(vector<int>& nums) {

        int maxsteps = nums[0];
        int currm = nums[0];
        int step = 0;

        if(nums.size() == 0){
            return 0;
        }

        for(int i = 1; i<nums.size(); i++){

            currm = max ( currm , nums[i] + i );
            

            if(i == maxsteps){
                maxsteps = currm;
                cout<<maxsteps<<" <- maxsteps  "<<endl;
                step++;
            }

            if(maxsteps >= nums.size()-1){
                return step;
            }

        }
        return 0;
    
    }
};

int main(){
    Solution a;
    vector<int>b{7,0,9,6,9,6,1,7,9,0,1,2,9,0,3};

    cout<<a.jump(b);

}