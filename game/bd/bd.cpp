#include<bits/stdc++.h>

using namespace std;


int main(){
	freopen("out2.json","r",stdin);
	freopen("out3.json","w",stdout);
	string s;
	while(cin >> s){
		/*for(int i(0); i < s.size(); i++){
			if(s[i] =='\"' ){
				cout << " ";
			}else{
				if(s[i] == ','){
					cout << '\n';
				}else{
					cout << s[i];
				}
			}
		}*/
		//cout << s.size();
		cout << "{ \"mot\": \"" << s << "\"} \n" ;
	}
}