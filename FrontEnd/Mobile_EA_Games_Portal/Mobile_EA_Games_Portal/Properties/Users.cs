using System;

namespace Mobile_EA_Games_Portal
{
	public class Users
	{
		private string Name { get; set;}
		private string Nickname { get; set;}
		private string Email { get; set;}
		private string Password { get; set;}
		private string Avatar { get; set; }
		private int Age {get; set;}
		private bool Admin { get; set;}
		private List<Users> friends { get; set;}
		private List<News> RecentlyViewedNews { get; set; }


		public Users (string Name, string NickName, string Email, string Password, int Age, bool Admin)
		{
			this.Admin = Admin;
			this.Age = Age;
			this.Email = Email;
			this.Name = Name;
			this.Nickname = NickName;
			RecentlyViewedNews = new List<RecentlyViewedNews> ();
		}

		public void UpdateAvatar(string AvatarPath)
		{
			Avatar = AvatarPath;
		}
	}
}

