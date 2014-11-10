using System;
using System.Collections.Generic;

namespace Mobile_EA_Games_Portal
{
	public class Game
	{
		private string Title { get; set; }
		private List<Users> Followers { get; set; }
		private List<News> News {get; set;}
		private List<string> Images { get; set;}
		private List<string> Videos { get; set;}

		public Game (string Title)
		{
			Followers = new List<Users> ();
			News = new List<News> ();
			Images = new List<string> ();
			Videos = new List<string> ();
		}
	}
}

