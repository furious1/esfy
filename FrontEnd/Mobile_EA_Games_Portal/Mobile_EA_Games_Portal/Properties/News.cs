using System;
using System.Collections.Generic;

namespace Mobile_EA_Games_Portal
{
	public class News
	{
		private string Title { get; set;}
		private string Content { get; set;}
		private List<string> Images { get; set;}
		private List<string> Videos { get; set;}
		private DateTime Date { get; set; }
		private int Views { get; set; }
		private bool IsChampionsheepRelated { get; set; }

		public News (string Title, string Content, DateTime Date,bool IsChampionsheepRelated)
		{
			this.Title = Title;
			this.Content = Content;
			this.Date = Date;
			this.IsChampionsheepRelated = IsChampionsheepRelated;
			Images = new List<string> ();
			Videos = new List<string> ();
		}

		public void IncrementViews()
		{
			Views += 1;
		}

		public void AddImage(string imagePath)
		{
			if (!string.IsNullOrWhiteSpace (imagePath) && Images!=null) 
			{
				Images.Add (imagePath);
			}
		}


		public void AddVideo(string videoPath)
		{
			if (!string.IsNullOrWhiteSpace (videoPath) && Videos!=null) 
			{
				Videos.Add (videoPath);
			}
		}
	}
}

