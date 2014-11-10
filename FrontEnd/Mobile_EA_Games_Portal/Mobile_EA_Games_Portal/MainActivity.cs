using System;

using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace Mobile_EA_Games_Portal
{
	[Activity (Label = "Mobile_EA_Games_Portal", MainLauncher = true, Icon = "@drawable/icon")]
	public class MainActivity : Activity
	{
		Button prev;
		Button next;
		TextView text;
		ImageView image;
		int[] images = {Resource.Drawable.image1,Resource.Drawable.image2,Resource.Drawable.image3,Resource.Drawable.image4,Resource.Drawable.image5};
		int[] names = {1,2,3,4,5};
		int index;
		protected override void OnCreate (Bundle bundle)
		{
			base.OnCreate (bundle);

			// Set our view from the "main" layout resource
			SetContentView (Resource.Layout.Main);
			index = 0;
			prev = FindViewById<Button> (Resource.Id.prev);
			next = FindViewById<Button> (Resource.Id.next);
			text = FindViewById<TextView> (Resource.Id.text);
			text.Text = "image"+names [index]+".jpg";
			image = FindViewById<ImageView> (Resource.Id.imageView);
			image.SetImageResource (images [index]);
			prev.Click += Prev_Clicked;
			next.Click += Next_Clicked;
		}

		public void Prev_Clicked(object sender, EventArgs e) 
		{
			index -= 1;
			if (index < 0) 
			{
				index = images.Length - 1;
				return;
			}
			else 
			{
				image.SetImageResource (images [index]);
				text.Text = "image"+names [index]+".jpg";
			}
		}

		public void Next_Clicked(object sender, EventArgs e) 
		{
			index += 1;
			if (index >= images.Length) 
			{
				index = 0;
				return;
			}
			else 
			{
				image.SetImageResource (images [index]);
				text.Text = "image"+names [index]+".jpg";
			}
		}
	}
}


